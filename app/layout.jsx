import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";

export const metadata = {
     title: "Property Plus | Find The Perfect Rentals",
     discriptions: "Find Your Dream Rental Properties",
     keywords: "Rentals,Find rentals,Your Dream Rental Properties",
};

const MainLayout = ({ children }) => {
     return (
          <html>
               <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
               </body>
          </html>
     );
};

export default MainLayout;
