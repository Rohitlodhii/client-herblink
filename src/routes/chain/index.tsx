"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { chainData, type chainDataType } from "../../lib/hardcoded/chaindata";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { MapDialog } from "../../components/chain/map";

export const Route = createFileRoute('/chain/')({
  component: ChainDataSearch,
})

type FormInputs = {
  blockchainID?: string;
  fromDate?: Date;
  toDate?: Date;
};

export default function ChainDataSearch() {
  const { register, handleSubmit, control, reset } = useForm<FormInputs>();
  const [results, setResults] = useState<chainDataType[]>([]);
  const [searched, setSearched] = useState(false); // to check if user searched
  const router = useNavigate();

  const onSubmit = (data: FormInputs) => {
    const filtered = chainData.filter((item) => {
      const matchesID = data.blockchainID
        ? item.blockchainID.toLowerCase().includes(data.blockchainID.toLowerCase())
        : true;

      const matchesFromDate = data.fromDate
        ? item.timestamp >= data.fromDate
        : true;

      const matchesToDate = data.toDate
        ? item.timestamp <= data.toDate
        : true;

      return matchesID && matchesFromDate && matchesToDate;
    });

    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="flex flex-col items-center mt-10 min-h-screen p-4">
      <Button onClick={()=>router({ to : '/chain/livechain'})}>View Live Chain</Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-xl font-bold text-center">Search Blockchain Data</h2>
        <input
          {...register("blockchainID")}
          placeholder="Blockchain ID"
          className="border p-2 rounded"
        />
        <Controller
          control={control}
          name="fromDate"
          render={({ field }) => (
            <DatePicker
              placeholderText="From Date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="border p-2 rounded w-full"
              showTimeSelect
              dateFormat="Pp"
            />
          )}
        />
        <Controller
          control={control}
          name="toDate"
          render={({ field }) => (
            <DatePicker
              placeholderText="To Date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="border p-2 rounded w-full"
              showTimeSelect
              dateFormat="Pp"
            />
          )}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => {
            reset();
            setResults([]);
            setSearched(false);
          }}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </form>

      {searched && (
        <div className="mt-8 flex flex-col gap-2  items-center justify-center ">
          {results.length === 0 ? (
            <p className="text-center col-span-full">No matching records found.</p>
          ) : (
            results.map((item) => (
              <div
                key={item.blockchainID}
                className="border rounded shadow p-4 flex flex-col gap-2 bg-white"
              >
                <p>
                  <strong>Blockchain ID:</strong> {(item.blockchainID).trim().slice(0,7)}...
                </p>
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Event Type:</strong> {item.eventType}
                </p>
                <p>
                  <strong>Timestamp:</strong> {item.timestamp.toString()}
                </p>
                <p>
                  <strong>Location:</strong> {item.location.address}
                </p>
                <MapDialog  coordinates={item.location.coordinates} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
