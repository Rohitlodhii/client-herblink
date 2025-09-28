import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Users, Plus, Trash2, MapPin, User, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const contractSchema = z.object({
  farmerName: z.string().min(2, "Farmer name required"),
  village: z.string().min(2, "Village name required"),
  contactNumber: z.string().min(10, "Valid contact number required"),
  contractType: z.string().min(1, "Contract type required"),
  quantity: z.string().min(1, "Quantity required"),
});

const sellerSchema = z.object({
  sellerName: z.string().min(2, "Seller name required"),
  businessName: z.string().min(2, "Business name required"),
  location: z.string().min(2, "Location required"),
  contactNumber: z.string().min(10, "Valid contact number required"),
  productsSupplied: z.string().min(1, "Products supplied required"),
});

const formSchema = z.object({
  totalVillages: z.string().min(1, "Total villages required"),
  totalFarmers: z.string().min(1, "Total farmers required"),
  contracts: z.array(contractSchema),
  sellers: z.array(sellerSchema),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ProcessorContractsFormProps {
  onSubmit: () => void;
}

export function ProcessorContractsForm({ onSubmit }: ProcessorContractsFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      totalVillages: "",
      totalFarmers: "",
      contracts: [{ farmerName: "", village: "", contactNumber: "", contractType: "", quantity: "" }],
      sellers: [{ sellerName: "", businessName: "", location: "", contactNumber: "", productsSupplied: "" }],
      additionalInfo: "",
    },
  });

  const { fields: contractFields, append: appendContract, remove: removeContract } = useFieldArray({
    control: form.control,
    name: "contracts"
  });

  const { fields: sellerFields, append: appendSeller, remove: removeSeller } = useFieldArray({
    control: form.control,
    name: "sellers"
  });

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Contracts form data:", data);
      alert("Contracts & Sellers Information Saved\nYour contracts and sellers information has been saved successfully");
      onSubmit();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <Users className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-foreground">Contracts & Sellers</CardTitle>
            <CardDescription className="text-muted-foreground">
              Information about villages, farmers under contract, and your sellers
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            {/* Summary Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="totalVillages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Total Villages Connected</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter number of villages" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="totalFarmers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Total Farmers Under Contract</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter number of farmers" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Farmer Contracts Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Farmer Contracts</h3>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendContract({ farmerName: "", village: "", contactNumber: "", contractType: "", quantity: "" })}
                  className="flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Contract</span>
                </Button>
              </div>

              <div className="space-y-6">
                {contractFields.map((field, index) => (
                  <Card key={field.id} className="p-4 bg-muted/30">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-foreground">Contract #{index + 1}</h4>
                      {contractFields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeContract(index)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`contracts.${index}.farmerName`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Farmer Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter farmer name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`contracts.${index}.village`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Village</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter village name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`contracts.${index}.contactNumber`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter contact number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`contracts.${index}.contractType`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contract Type</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Rice Supply, Wheat Supply" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`contracts.${index}.quantity`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantity (tons/year)</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter quantity" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sellers Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Sellers & Suppliers</h3>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendSeller({ sellerName: "", businessName: "", location: "", contactNumber: "", productsSupplied: "" })}
                  className="flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Seller</span>
                </Button>
              </div>

              <div className="space-y-6">
                {sellerFields.map((field, index) => (
                  <Card key={field.id} className="p-4 bg-muted/30">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-foreground">Seller #{index + 1}</h4>
                      {sellerFields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSeller(index)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`sellers.${index}.sellerName`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seller Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter seller name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`sellers.${index}.businessName`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter business name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`sellers.${index}.location`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter location" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`sellers.${index}.contactNumber`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter contact number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`sellers.${index}.productsSupplied`}
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Products Supplied</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Raw Rice, Wheat, Agricultural Equipment" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any additional information about your contracts, partnerships, or supply chain"
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8"
              >
                {isLoading ? "Saving..." : "Save & Continue"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}