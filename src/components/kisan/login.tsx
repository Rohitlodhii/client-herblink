import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
 // 👈 if using tanstack router, replace with its navigate

const KisanLoginCard = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [captchaSvg, setCaptchaSvg] = useState<string>("");
  const [captchaId, setCaptchaId] = useState<string>("");
  const [captchaInput, setCaptchaInput] = useState<string>("");
  const [otpSent, setOtpSent] = useState(false); // 👈 track if OTP was sent
  const [otpInput, setOtpInput] = useState(""); // 👈 OTP input value
  const navigate = useNavigate();

  // fetch captcha on mount
  const fetchCaptcha = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE}/captcha`);
      const data = await res.json();
      setCaptchaSvg(data.svg);
      setCaptchaId(data.captchaId);
    } catch (err) {
      console.error("Failed to load captcha", err);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  // Step 1: Register & Send OTP
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE}/farmer/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mobileNumber,
            captchaId,
            captchaInput,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        alert(data.error || "Something went wrong");
        fetchCaptcha();
      } else {
        alert("OTP sent successfully!");
        setOtpSent(true); // 👈 show OTP input
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
      fetchCaptcha();
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    try {

        console.log(mobileNumber)
        console.log(otpInput)
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE}/farmer/auth/verifyotp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mobileNumber, // 👈 send mobile number too
            code: otpInput, // or 'code' if backend expects that
          }),
        }
      );
  
      const data = await res.json();
      console.log(data);
  
      if (!res.ok) {
       
        alert(data.error || "Mobile number or OTP required");
      } else {
        localStorage.setItem("token", data.authToken);
        alert("OTP verified successfully!");
        navigate({to : '/'}); // redirect after success
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };




  
  return (
    <form
      onSubmit={otpSent ? handleVerifyOtp : handleRegister}
      className="md:max-w-md w-full bg-secondary shadow-sm rounded-sm flex flex-col gap-2 p-4"
    >
      <h2 className="text-xl">{t("kisanlogincard.title")}</h2>

      {!otpSent ? (
        <>
          {/* Mobile Number Input */}
          <div className="flex flex-col gap-2">
            <label>{t("kisanlogincard.mobinput")}</label>
            <input
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              type="tel"
              required
              className="h-10 w-full px-4 bg-white rounded-sm outline outline-neutral-600"
            />
          </div>

          {/* Captcha */}
          <div className="flex flex-col gap-2 mt-2">
            <label>{t("kisanlogincard.captcha")}</label>
            {captchaSvg ? (
              <div
                className="bg-white p-2 rounded-sm"
                dangerouslySetInnerHTML={{ __html: captchaSvg }}
              />
            ) : (
              <p>Loading captcha...</p>
            )}
            <input
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              type="text"
              required
              placeholder="Enter captcha"
              className="h-10 w-full px-4 bg-white rounded-sm outline outline-neutral-600"
            />
            <button
              type="button"
              onClick={fetchCaptcha}
              className="text-sm text-blue-500 underline"
            >
              {t("kisanlogincard.refreshcaptcha")}
            </button>
          </div>
        </>
      ) : (
        <>
          {/* OTP Input */}
          <div className="flex flex-col gap-2">
            <label>{t("kisanlogincard.enterOtp")}</label>
            <input
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              type="text"
              required
              placeholder="Enter the OTP"
              className="h-10 w-full px-4 bg-white rounded-sm outline outline-neutral-600"
            />
          </div>
        </>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white py-2 rounded-sm mt-2"
      >
        {loading
          ? t("kisanlogincard.loading")
          : otpSent
          ? "Verify OTP"
          : t("kisanlogincard.submitbtn")}
      </button>
    </form>
  );
};

export default KisanLoginCard;
