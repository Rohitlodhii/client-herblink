import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Factory, Phone } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';



export const Route = createFileRoute('/processor/login')({
  component: ChainLayout,
})


function ChainLayout() {
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobile) {
      alert("Mobile number required\nPlease enter your mobile number");
      return;
    }

    if (mobile.length !== 10) {
      alert("Invalid mobile number\nPlease enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("OTP Sent\nPlease check your mobile for the verification code");
      router.navigate({
        to:'/processor/verify-otp'
      })
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <Card className="w-full max-w-md ">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16  rounded-full flex items-center justify-center mb-4">
            <Factory className="h-8 w-8 " />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">Processor Registration</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your mobile number to begin registration
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-foreground">Mobile Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="pl-10"
                  maxLength={10}
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full  hover:opacity-90 transition-opacity" 
              disabled={isLoading}
            >
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Need help? Contact support at{" "}
              <span className=" font-medium">support@processor.com</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}