import "@/assets/styles/globals.css";

export const metadata = {
     title: "Property Plus | Find The Perfect Rentals",
     discriptions: "Find Your Dream Rental Properties",
     keywords: "Rentals,Find rentals,Your Dream Rental Properties",
};

const MainLayout = ({ children }) => {
     return (
          <html>
               <body>
                    <div>{children}</div>
               </body>
          </html>
     );
};

export default MainLayout;
