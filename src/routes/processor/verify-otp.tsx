import { createFileRoute,  useRouter } from '@tanstack/react-router'
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { ArrowLeft, Factory, Loader2 } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../components/ui/input-otp';
import { Button } from '../../components/ui/button';

export const Route = createFileRoute('/processor/verify-otp')({
  component: RouteComponent,
})


function RouteComponent() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      alert("Invalid OTP\nPlease enter the complete 6-digit OTP");
      return;
    }

    // Hardcoded OTP verification
    if (otp !== "123456") {
      alert("Invalid OTP\nPlease enter the correct OTP: 123456");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with immediate success feedback
    setTimeout(() => {
      alert("Verification Successful\nWelcome to the processor registration portal");
      // Navigate immediately after alert
      router.navigate({
        to: '/processor/dashboard'
      });
    }, 500); // Reduced delay from 1000ms to 500ms
  };

  const handleResendOTP = () => {
    alert("OTP Resent\nNew OTP has been sent to your mobile number");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        {isLoading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Verifying OTP...</p>
            </div>
          </div>
        )}
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Factory className="h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">Verify OTP</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter the 6-digit code sent to your mobile number
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            <div className="flex justify-center">
              <InputOTP
                value={otp}
                onChange={(value) => setOtp(value)}
                maxLength={6}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

          
            
            <Button 
              onClick={handleVerifyOTP}
              className="w-full hover:opacity-90 transition-opacity" 
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify OTP"
              )}
            </Button>
            
            <div className="flex items-center justify-between text-sm">
              <Button
                variant="ghost"
                onClick={() => router.navigate({
                  to:'/processor/dashboard'
                })}
                className=" "
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              
              <Button
                variant="ghost"
                onClick={handleResendOTP}
                
              >
                Resend OTP
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}