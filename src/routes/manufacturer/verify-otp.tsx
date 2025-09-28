import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/manufacturer/verify-otp')({
  component: RouteComponent,
})



import { useState, useEffect } from "react";
import { Factory, ArrowLeft, Timer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
 

function RouteComponent() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const router = useRouter();
 

  const HARDCODED_OTP = "123456";
  const userMobile = localStorage.getItem("userMobile");
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userMobile || !userEmail) {
      router.navigate({
        to : "/manufacturer/login"
      })
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router, userMobile, userEmail]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      alert("Invalid OTP\nPlease enter the complete 6-digit OTP.");
      return;
    }

    if (otp !== HARDCODED_OTP) {
      alert("Incorrect OTP\nThe OTP you entered is incorrect. Please try again.");
      return;
    }

    setIsLoading(true);
    
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      alert("OTP Verified Successfully\nRedirecting to registration dashboard...");
      router.navigate({
        to : "/manufacturer/dashboard"
      })
    }, 1000);
  };

  const handleResendOTP = () => {
    alert("OTP Sent\nA new OTP has been sent to your mobile number.");
    setTimeLeft(300);
    setOtp("");
  };

  const maskedMobile = userMobile ? `+91 ${userMobile.slice(0, 2)}****${userMobile.slice(-2)}` : "";

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-elegant mb-4">
            <Factory className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Verify OTP</h1>
          <p className="text-muted-foreground">Enter the 6-digit code sent to {maskedMobile}</p>
        </div>

        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Enter Verification Code</CardTitle>
            <CardDescription>
              We've sent a verification code to your mobile number
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">6-Digit OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="text-center text-xl font-mono tracking-widest transition-smooth focus:shadow-hover"
                  maxLength={6}
                />
              </div>

              {timeLeft > 0 && (
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Timer className="h-4 w-4" />
                  <span>Time remaining: {formatTime(timeLeft)}</span>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full  hover:shadow-hover transition-smooth"
                disabled={isLoading || timeLeft === 0}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              {timeLeft === 0 ? (
                <Button 
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleResendOTP}
                >
                  Resend OTP
                </Button>
              ) : (
                <Button 
                  type="button"
                  variant="ghost"
                  className="w-full text-sm"
                  onClick={handleResendOTP}
                >
                  Didn't receive? Resend OTP
                </Button>
              )}
            </form>

            <div className="mt-4">
              <Button
                variant="ghost"
                className="w-full text-sm"
                onClick={() =>  router.navigate({
                  to : "/manufacturer/login"
                })}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
