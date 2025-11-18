import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { addAdmin } from '@/store/slices/adminSlice';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UserPlus, Copy, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.role) {
      toast.error('Please fill in all fields');
      return;
    }

    const tempPassword = generatePassword();
    
    dispatch(
      addAdmin({
        name: formData.name,
        email: formData.email,
        role: formData.role,
        tempPassword,
      })
    );

    setGeneratedPassword(tempPassword);
    setShowSuccess(true);
    toast.success('Admin created successfully!');
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    toast.success('Password copied to clipboard');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', role: '' });
    setGeneratedPassword('');
    setShowSuccess(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="glass-card border-border/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-cyan">
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground">Create New Admin</CardTitle>
                <CardDescription>Add a new administrator to the system</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <Label htmlFor="name">Admin Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass border-border/50 focus:border-primary transition-all"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass border-border/50 focus:border-primary transition-all"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Label htmlFor="role">Role</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger className="glass border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="glass border-border/50">
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="analyst">Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold glow-cyan"
                  >
                    Create Admin
                  </Button>
                </motion.div>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-6 py-8"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Admin Created!</h3>
                  <p className="text-muted-foreground">
                    {formData.name} has been successfully added to the system
                  </p>
                </div>

                <div className="glass p-4 rounded-lg space-y-3">
                  <Label className="text-sm text-muted-foreground">Temporary Password</Label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-4 py-3 rounded-lg bg-secondary/50 font-mono text-sm text-foreground">
                      {generatedPassword}
                    </code>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopyPassword}
                      className="border-border/50 hover:border-primary hover:bg-primary/10"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Make sure to save this password. It won't be shown again.
                  </p>
                </div>

                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-border/50 hover:border-primary hover:bg-primary/10"
                >
                  Create Another Admin
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreateAdmin;
