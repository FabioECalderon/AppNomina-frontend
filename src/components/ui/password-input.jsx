import * as React from 'react';
import { Input } from './input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Input
      type={showPassword ? 'text' : 'password'}
      suffix={
        showPassword ? (
          <EyeIcon
            className="select-none"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeOffIcon
            className="select-none"
            onClick={() => setShowPassword(true)}
          />
        )
      }
      className={className}
      {...props}
      ref={ref}
    />
  );
});
PasswordInput.displayName = 'Input';

export { PasswordInput };
