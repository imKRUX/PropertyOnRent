import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";

const HomeProperties = () => {
     const recentProperties = properties
          .sort(() => Math.random() - Math.random())
          .slice(0, 3);

     return (
          <section className="px-4 py-6">
               <div className="m-auto container-xl lg:container">
                    <h2 className="mb-6 text-3xl font-bold text-center text-blue-500">
                         Recent Properties
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                         {recentProperties === 0 ? (
                              <p>No Properties Found</p>
                         ) : (
                              recentProperties.map((property) => (
                                   <PropertyCard
                                        key={property._id}
                                        property={property}
                                   />
                              ))
                         )}
                    </div>
               </div>
          </section>
     );
};

export default HomeProperties;
