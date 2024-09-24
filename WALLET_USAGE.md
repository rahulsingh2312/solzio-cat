
# Solana Wallet Adapter Usage

The Solana wallet adapter has been set up in your project. Here's how to use it:

1. The WalletContext is already set up in your layout.tsx file.

2. To use the wallet in any component, import and use the CustomWalletConnect component:

   ```jsx
   import dynamic from 'next/dynamic';

   const YourComponent = () => {
     const WalletsProvider = dynamic(
       () => import('../components/wallets/CustomWalletConnect'),
       { ssr: false }
     );

     return (
       <div>
         <WalletsProvider />
         {/* Rest of your component */}
       </div>
     );
   };

   export default YourComponent;
   ```

3. You can now use Solana wallet functions in your components. Import necessary hooks:

   ```jsx
   import { useWallet, useConnection } from "@solana/wallet-adapter-react";
   ```

4. Refer to the Solana Wallet Adapter documentation for more advanced usage:
   https://github.com/solana-labs/wallet-adapter

Happy coding!
  