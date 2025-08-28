// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios';
// import Sidebar from '../components/Sidebar';
// import { UserPlus } from 'lucide-react';
// import FriendRequest from '../components/FriendRequest';
// import UserCard from '../components/UserCard';

// const NetworkPage = () => {

//     const {data:user} = useQuery({queryKey:["authUser"]});

//     const {data: connectionRequests} = useQuery({
//         queryKey: ["connectionRequests"],
//         // queryFn: ()=> axiosInstance.get("/connections/requests")
//         queryFn: async () => {
//     const res = await axiosInstance.get("/connections/requests")
//     return res.data   
//   }
//     })

//      const {data: connections} = useQuery({
//         queryKey: ["connections"],
//         // queryFn: ()=> axiosInstance.get("/connections")
//         queryFn: async () => {
//     const res = await axiosInstance.get("/connections")
//     return res.data
//   }
//     })
//   return (
//     <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
//         <div className="col-span-1 lg:col-span-1">
//             <Sidebar user={user}/>
//         </div>
//         <div className="col-span-1 lg:col-span-3">
//             <div className="bg-secondary rounded-lg shadow p-6 mb-6">
//                 <h1 className='text-2xl font-bold mb-6'>My Network</h1>
//                 {connectionRequests?.data?.length > 0 ? (
//                     <div className='mb-8'>
//                         <h2 className='text-xl font-semibold mb-2'>
//                             Connection Request
//                         </h2>
//                         <div className='space-y-4'>
//                            {connectionRequests.map((request) => (
//                   <FriendRequest key={request.id} request={request}/>
//                 ))}
//                         </div>
                

//                     </div>
//                 ) : (
//                     <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                         <UserPlus size={48} className='mx-auto text-gray-400 mb-4'/>
//                         <h3 className='text-xl font-semibold mb-2'>No Connection Requests</h3>
//                         <p className="text-gray-600">
//                             You don&apos;t have any pending connection requests at the moment
//                         </p>
//                         <p className="text-gray-600 mt-2">
//                             Explore suggested connections below to expand your network !
//                         </p>
//                     </div>
//                 )}
//                 {connections?.data?.length > 0 && (
//                 <div className='mb-8'>
//                     <h2 className='text-xl font-semibold mb-4'>My Connections</h2>
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                         {connections.data.map((connection)=>(
//                             <UserCard key={connection._id} user={connection} isConnection={true}/>
//                         ))}
                        
//                     </div>
//                 </div>
//                 )}
//             </div>
//         </div>
      
//     </div>
//   )
// }



// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios';
// import Sidebar from '../components/Sidebar';
// import { UserPlus } from 'lucide-react';
// import FriendRequest from '../components/FriendRequest';
// import UserCard from '../components/UserCard';

// const NetworkPage = () => {

//     const {data:user} = useQuery({queryKey:["authUser"]});

//     const {data: connectionRequests, isLoading: isLoadingRequests} = useQuery({
//         queryKey: ["connectionsRequests"],
//         queryFn: async () => {
//             const res = await axiosInstance.get("/connections/requests")
//             return res.data   
//         }
//     })

//     const {data: connections, isLoading: isLoadingConnections} = useQuery({
//         queryKey: ["connections"],
//         queryFn: async () => {
//             const res = await axiosInstance.get("/connections")
//             return res.data
//         }
//     })

//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
//             <div className="col-span-1 lg:col-span-1">
//                 <Sidebar user={user}/>
//             </div>
//             <div className="col-span-1 lg:col-span-3">
//                 <div className="bg-secondary rounded-lg shadow p-6 mb-6">
//                     <h1 className='text-2xl font-bold mb-6'>My Network</h1>
                    
//                     {isLoadingRequests ? (
//                         <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                             <div className="animate-pulse">
//                                 <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                                 <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                             </div>
//                         </div>
//                     ) : connectionRequests?.data && connectionRequests.data.length > 0 ? (
//                         <div className='mb-8'>
//                             <h2 className='text-xl font-semibold mb-4'>
//                                 Connection Requests
//                             </h2>
//                             <div className='space-y-4'>
//                                {connectionRequests.data.map((request) => (
//                                     <FriendRequest key={request._id} request={request}/>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                             <UserPlus size={48} className='mx-auto text-gray-400 mb-4'/>
//                             <h3 className='text-xl font-semibold mb-2'>No Connection Requests</h3>
//                             <p className="text-gray-600">
//                                 You don&apos;t have any pending connection requests at the moment
//                             </p>
//                             <p className="text-gray-600 mt-2">
//                                 Explore suggested connections below to expand your network!
//                             </p>
//                         </div>
//                     )}
                    
//                     {isLoadingConnections ? (
//                         <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                             <div className="animate-pulse">
//                                 <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                                 <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                             </div>
//                         </div>
//                     ) : connections?.data && connections.data.length > 0 && (
//                         <div className='mb-8'>
//                             <h2 className='text-xl font-semibold mb-4'>My Connections</h2>
//                             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                                 {connections.data.map((connection) => (
//                                     <UserCard key={connection._id} user={connection} isConnection={true}/>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NetworkPage;

// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios';
// import Sidebar from '../components/Sidebar';
// import { UserPlus } from 'lucide-react';
// import FriendRequest from '../components/FriendRequest';
// import UserCard from '../components/UserCard';

// const NetworkPage = () => {

//     const {data:user} = useQuery({queryKey:["authUser"]});

//     const {data: connectionRequests, isLoading: isLoadingRequests, error: requestsError} = useQuery({
//         queryKey: ["connectionRequests"], // Different from Navbar's "connectionsRequests"
//         queryFn: async () => {
//             const res = await axiosInstance.get("/connections/requests")
//             console.log("Connection Requests Response:", res.data);
//             return res.data   // Return just the data array
//         }
//     })

//     const {data: connections, isLoading: isLoadingConnections, error: connectionsError} = useQuery({
//         queryKey: ["connections"],
//         queryFn: async () => {
//             const res = await axiosInstance.get("/connections")
//             console.log("Connections Response:", res.data);
//             return res.data
//         }
//     })

//     // Debug logs
//     console.log("connectionRequests:", connectionRequests);
//     console.log("connections:", connections);
//     console.log("connectionRequests?.data:", connectionRequests?.data);
//     console.log("connections?.data:", connections?.data);

//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
//             <div className="col-span-1 lg:col-span-1">
//                 <Sidebar user={user}/>
//             </div>
//             <div className="col-span-1 lg:col-span-3">
//                 <div className="bg-secondary rounded-lg shadow p-6 mb-6">
//                     <h1 className='text-2xl font-bold mb-6'>My Network</h1>
                    
//                     {isLoadingRequests ? (
//                         <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                             <div className="animate-pulse">
//                                 <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                                 <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                             </div>
//                         </div>
//                     ) : requestsError ? (
//                         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                             Error loading connection requests: {requestsError.message}
//                         </div>
//                     ) : connectionRequests && Array.isArray(connectionRequests) && connectionRequests.length > 0 ? (
//                         <div className='mb-8'>
//                             <h2 className='text-xl font-semibold mb-4'>
//                                 Connection Requests
//                             </h2>
//                             <div className='space-y-4'>
//                                {connectionRequests.map((request) => (
//                                     <FriendRequest key={request._id} request={request}/>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : connectionRequests && Array.isArray(connectionRequests.data) && connectionRequests.data.length > 0 ? (
//                         <div className='mb-8'>
//                             <h2 className='text-xl font-semibold mb-4'>
//                                 Connection Requests
//                             </h2>
//                             <div className='space-y-4'>
//                                {connectionRequests.data.map((request) => (
//                                     <FriendRequest key={request._id} request={request}/>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                             <UserPlus size={48} className='mx-auto text-gray-400 mb-4'/>
//                             <h3 className='text-xl font-semibold mb-2'>No Connection Requests</h3>
//                             <p className="text-gray-600">
//                                 You don&apos;t have any pending connection requests at the moment
//                             </p>
//                             <p className="text-gray-600 mt-2">
//                                 Explore suggested connections below to expand your network!
//                             </p>
//                         </div>
//                     )}
                    
//                     {isLoadingConnections ? (
//                         <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                             <div className="animate-pulse">
//                                 <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                                 <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                             </div>
//                         </div>
//                     ) : connectionsError ? (
//                         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                             Error loading connections: {connectionsError.message}
//                         </div>
//                     ) : connections && Array.isArray(connections.data) && connections.data.length > 0 ? (
//                         <div className='mb-8'>
//                             <h2 className='text-xl font-semibold mb-4'>My Connections</h2>
//                             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                                 {connections.data.map((connection) => (
//                                     <UserCard key={connection._id} user={connection} isConnection={true}/>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : connections && Array.isArray(connections) && connections.length > 0 ? (
//                         <div className='mb-8'>
//                             <h2 className='text-xl font-semibold mb-4'>My Connections</h2>
//                             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                                 {connections.map((connection) => (
//                                     <UserCard key={connection._id} user={connection} isConnection={true}/>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : null}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NetworkPage;

// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios';
// import Sidebar from '../components/Sidebar';
// import { UserPlus } from 'lucide-react';
// import FriendRequest from '../components/FriendRequest';
// import UserCard from '../components/UserCard';

// const NetworkPage = () => {

//     const {data:user} = useQuery({queryKey:["authUser"]});

//     const {data: connectionRequests, isLoading: isLoadingRequests, error: requestsError} = useQuery({
//         queryKey: ["networkPageConnectionRequests"], // Unique key
//         queryFn: async () => {
//             const res = await axiosInstance.get("/connections/requests")
//             console.log("Full API Response:", res);
//             console.log("Response data:", res.data);
//             console.log("Is res.data an array?", Array.isArray(res.data));
            
//             // Return the array directly
//             return res.data;
//         }
//     })

//     const {data: connections, isLoading: isLoadingConnections, error: connectionsError} = useQuery({
//         queryKey: ["networkPageConnections"], // Unique key
//         queryFn: async () => {
//             const res = await axiosInstance.get("/connections")
//             console.log("Connections Full API Response:", res);
//             console.log("Connections Response data:", res.data);
//             console.log("Is connections res.data an array?", Array.isArray(res.data));
            
//             // Return the array directly
//             return res.data;
//         }
//     })

//     // Extensive debugging
//     console.log("=== NetworkPage Debug ===");
//     console.log("connectionRequests:", connectionRequests);
//     console.log("connectionRequests type:", typeof connectionRequests);
//     console.log("connectionRequests is array?", Array.isArray(connectionRequests));
//     console.log("connectionRequests length:", connectionRequests?.length);
//     console.log("connections:", connections);
//     console.log("connections type:", typeof connections);
//     console.log("connections is array?", Array.isArray(connections));
//     console.log("connections length:", connections?.length);

//     // Safe function to render connection requests
//     const renderConnectionRequests = () => {
//         if (isLoadingRequests) {
//             return (
//                 <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                     <div className="animate-pulse">
//                         <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                         <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                     </div>
//                 </div>
//             );
//         }

//         if (requestsError) {
//             return (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                     Error loading connection requests: {requestsError.message}
//                 </div>
//             );
//         }

//         // Handle different possible data structures
//         let requestsArray = null;
        
//         if (Array.isArray(connectionRequests)) {
//             requestsArray = connectionRequests;
//         } else if (connectionRequests && Array.isArray(connectionRequests.data)) {
//             requestsArray = connectionRequests.data;
//         } else if (connectionRequests && connectionRequests.data && Array.isArray(connectionRequests.data.data)) {
//             requestsArray = connectionRequests.data.data;
//         }

//         console.log("Final requestsArray:", requestsArray);

//         if (requestsArray && requestsArray.length > 0) {
//             return (
//                 <div className='mb-8'>
//                     <h2 className='text-xl font-semibold mb-4'>
//                         Connection Requests ({requestsArray.length})
//                     </h2>
//                     <div className='space-y-4'>
//                         {requestsArray.map((request, index) => {
//                             console.log(`Request ${index}:`, request);
//                             return (
//                                 <FriendRequest key={request._id || request.id || index} request={request}/>
//                             );
//                         })}
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                 <UserPlus size={48} className='mx-auto text-gray-400 mb-4'/>
//                 <h3 className='text-xl font-semibold mb-2'>No Connection Requests</h3>
//                 <p className="text-gray-600">
//                     You don&apos;t have any pending connection requests at the moment
//                 </p>
//                 <p className="text-gray-600 mt-2">
//                     Explore suggested connections below to expand your network!
//                 </p>
//             </div>
//         );
//     };

//     // Safe function to render connections
//     const renderConnections = () => {
//         if (isLoadingConnections) {
//             return (
//                 <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                     <div className="animate-pulse">
//                         <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                         <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                     </div>
//                 </div>
//             );
//         }

//         if (connectionsError) {
//             return (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                     Error loading connections: {connectionsError.message}
//                 </div>
//             );
//         }

//         // Handle different possible data structures
//         let connectionsArray = null;
        
//         if (Array.isArray(connections)) {
//             connectionsArray = connections;
//         } else if (connections && Array.isArray(connections.data)) {
//             connectionsArray = connections.data;
//         } else if (connections && connections.data && Array.isArray(connections.data.data)) {
//             connectionsArray = connections.data.data;
//         }

//         console.log("Final connectionsArray:", connectionsArray);

//         if (connectionsArray && connectionsArray.length > 0) {
//             return (
//                 <div className='mb-8'>
//                     <h2 className='text-xl font-semibold mb-4'>My Connections ({connectionsArray.length})</h2>
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                         {connectionsArray.map((connection, index) => {
//                             console.log(`Connection ${index}:`, connection);
//                             return (
//                                 <UserCard key={connection._id || connection.id || index} user={connection} isConnection={true}/>
//                             );
//                         })}
//                     </div>
//                 </div>
//             );
//         }

//         return null;
//     };

//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
//             <div className="col-span-1 lg:col-span-1">
//                 <Sidebar user={user}/>
//             </div>
//             <div className="col-span-1 lg:col-span-3">
//                 <div className="bg-secondary rounded-lg shadow p-6 mb-6">
//                     <h1 className='text-2xl font-bold mb-6'>My Network</h1>
                    
//                     {renderConnectionRequests()}
//                     {renderConnections()}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NetworkPage;

// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios';
// import Sidebar from '../components/Sidebar';
// import { UserPlus } from 'lucide-react';
// import FriendRequest from '../components/FriendRequest';
// import UserCard from '../components/UserCard';

// const NetworkPage = () => {

//     const {data:user} = useQuery({queryKey:["authUser"]});

//     const {data: connectionRequestsResponse, isLoading: isLoadingRequests, error: requestsError} = useQuery({
//         queryKey: ["connectionsRequests"], // Same key as Navbar
//         queryFn: async () => axiosInstance.get("/connections/requests"), // Same pattern as Navbar
//         enabled: !!user
//     })

//     const {data: connectionsResponse, isLoading: isLoadingConnections, error: connectionsError} = useQuery({
//         queryKey: ["connections"],
//         queryFn: async () => axiosInstance.get("/connections"), // Same pattern as Navbar
//         enabled: !!user
//     })

//     // Extract the actual data arrays (same as Navbar does)
//     const connectionRequests = connectionRequestsResponse?.data;
//     const connections = connectionsResponse?.data;

//     // Extensive debugging
//     console.log("=== NetworkPage Debug ===");
//     console.log("connectionRequests:", connectionRequests);
//     console.log("connectionRequests type:", typeof connectionRequests);
//     console.log("connectionRequests is array?", Array.isArray(connectionRequests));
//     console.log("connectionRequests length:", connectionRequests?.length);
//     console.log("connections:", connections);
//     console.log("connections type:", typeof connections);
//     console.log("connections is array?", Array.isArray(connections));
//     console.log("connections length:", connections?.length);

//     // Safe function to render connection requests
//     const renderConnectionRequests = () => {
//         if (isLoadingRequests) {
//             return (
//                 <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                     <div className="animate-pulse">
//                         <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                         <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                     </div>
//                 </div>
//             );
//         }

//         if (requestsError) {
//             return (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                     Error loading connection requests: {requestsError.message}
//                 </div>
//             );
//         }

//         // Handle different possible data structures
//         let requestsArray = null;
        
//         if (Array.isArray(connectionRequests)) {
//             requestsArray = connectionRequests;
//         } else if (connectionRequests && Array.isArray(connectionRequests.data)) {
//             requestsArray = connectionRequests.data;
//         } else if (connectionRequests && connectionRequests.data && Array.isArray(connectionRequests.data.data)) {
//             requestsArray = connectionRequests.data.data;
//         }

//         console.log("Final requestsArray:", requestsArray);

//         if (requestsArray && requestsArray.length > 0) {
//             return (
//                 <div className='mb-8'>
//                     <h2 className='text-xl font-semibold mb-4'>
//                         Connection Requests ({requestsArray.length})
//                     </h2>
//                     <div className='space-y-4'>
//                         {requestsArray.map((request, index) => {
//                             console.log(`Request ${index}:`, request);
//                             return (
//                                 <FriendRequest key={request._id || request.id || index} request={request}/>
//                             );
//                         })}
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                 <UserPlus size={48} className='mx-auto text-gray-400 mb-4'/>
//                 <h3 className='text-xl font-semibold mb-2'>No Connection Requests</h3>
//                 <p className="text-gray-600">
//                     You don&apos;t have any pending connection requests at the moment
//                 </p>
//                 <p className="text-gray-600 mt-2">
//                     Explore suggested connections below to expand your network!
//                 </p>
//             </div>
//         );
//     };

//     // Safe function to render connections
//     const renderConnections = () => {
//         if (isLoadingConnections) {
//             return (
//                 <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                     <div className="animate-pulse">
//                         <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                         <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                     </div>
//                 </div>
//             );
//         }

//         if (connectionsError) {
//             return (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                     Error loading connections: {connectionsError.message}
//                 </div>
//             );
//         }

//         // Handle different possible data structures
//         let connectionsArray = null;
        
//         if (Array.isArray(connections)) {
//             connectionsArray = connections;
//         } else if (connections && Array.isArray(connections.data)) {
//             connectionsArray = connections.data;
//         } else if (connections && connections.data && Array.isArray(connections.data.data)) {
//             connectionsArray = connections.data.data;
//         }

//         console.log("Final connectionsArray:", connectionsArray);

//         if (connectionsArray && connectionsArray.length > 0) {
//             return (
//                 <div className='mb-8'>
//                     <h2 className='text-xl font-semibold mb-4'>My Connections ({connectionsArray.length})</h2>
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                         {connectionsArray.map((connection, index) => {
//                             console.log(`Connection ${index}:`, connection);
//                             return (
//                                 <UserCard key={connection._id || connection.id || index} user={connection} isConnection={true}/>
//                             );
//                         })}
//                     </div>
//                 </div>
//             );
//         }

//         return null;
//     };

//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
//             <div className="col-span-1 lg:col-span-1">
//                 <Sidebar user={user}/>
//             </div>
//             <div className="col-span-1 lg:col-span-3">
//                 <div className="bg-secondary rounded-lg shadow p-6 mb-6">
//                     <h1 className='text-2xl font-bold mb-6'>My Network</h1>
                    
//                     {renderConnectionRequests()}
//                     {renderConnections()}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NetworkPage;

// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios';
// import Sidebar from '../components/Sidebar';
// import { UserPlus } from 'lucide-react';
// import FriendRequest from '../components/FriendRequest';
// import UserCard from '../components/UserCard';

// const NetworkPage = () => {

//     const {data:user} = useQuery({queryKey:["authUser"]});

//     const {data: connectionRequestsResponse, isLoading: isLoadingRequests, error: requestsError} = useQuery({
//         queryKey: ["connectionsRequests"], // Same key as Navbar
//         queryFn: async () => axiosInstance.get("/connections/requests"), // Same pattern as Navbar
//         enabled: !!user
//     })

//     const {data: connectionsResponse, isLoading: isLoadingConnections, error: connectionsError} = useQuery({
//         queryKey: ["connections"],
//         queryFn: async () => axiosInstance.get("/connections"), // Same pattern as Navbar
//         enabled: !!user
//     })

//     // Extract the actual data arrays (same as Navbar does)
//     const connectionRequests = connectionRequestsResponse?.data;
//     const connections = connectionsResponse?.data;

//     // Extensive debugging
//     console.log("=== NetworkPage Debug ===");
//     console.log("connectionRequestsResponse:", connectionRequestsResponse);
//     console.log("connectionRequests (extracted):", connectionRequests);
//     console.log("connectionRequests type:", typeof connectionRequests);
//     console.log("connectionRequests is array?", Array.isArray(connectionRequests));
//     console.log("connectionRequests length:", connectionRequests?.length);
//     console.log("connectionsResponse:", connectionsResponse);
//     console.log("connections (extracted):", connections);
//     console.log("connections type:", typeof connections);
//     console.log("connections is array?", Array.isArray(connections));
//     console.log("connections length:", connections?.length);

//     // Add a safety check before any mapping
//     const safeConnectionRequests = Array.isArray(connectionRequests) ? connectionRequests : [];
//     const safeConnections = Array.isArray(connections) ? connections : [];
    
//     console.log("safeConnectionRequests:", safeConnectionRequests);
//     console.log("safeConnections:", safeConnections);

//     // Safe function to render connection requests
//     const renderConnectionRequests = () => {
//         if (isLoadingRequests) {
//             return (
//                 <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                     <div className="animate-pulse">
//                         <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                         <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                     </div>
//                 </div>
//             );
//         }

//         if (requestsError) {
//             return (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                     Error loading connection requests: {requestsError.message}
//                 </div>
//             );
//         }

//         // Handle different possible data structures
//         let requestsArray = null;
        
//         try {
//             if (Array.isArray(safeConnectionRequests)) {
//                 requestsArray = safeConnectionRequests;
//                 console.log("Using safeConnectionRequests directly");
//             } else if (Array.isArray(connectionRequests)) {
//                 requestsArray = connectionRequests;
//                 console.log("Using connectionRequests directly");
//             } else {
//                 console.log("No valid array found for connection requests");
//                 requestsArray = [];
//             }
//         } catch (error) {
//             console.error("Error processing connection requests:", error);
//             requestsArray = [];
//         }

//         console.log("Final requestsArray:", requestsArray);
//         console.log("Final requestsArray length:", requestsArray.length);

//         if (requestsArray && requestsArray.length > 0) {
//             return (
//                 <div className='mb-8'>
//                     <h2 className='text-xl font-semibold mb-4'>
//                         Connection Requests ({requestsArray.length})
//                     </h2>
//                     <div className='space-y-4'>
//                         {requestsArray.map((request, index) => {
//                             console.log(`Rendering request ${index}:`, request);
//                             const key = request?._id || request?.id || `request-${index}`;
//                             console.log(`Using key: ${key}`);
                            
//                             try {
//                                 return (
//                                     <FriendRequest 
//                                         key={key} 
//                                         request={request}
//                                     />
//                                 );
//                             } catch (error) {
//                                 console.error(`Error rendering request ${index}:`, error);
//                                 return <div key={key}>Error rendering request</div>;
//                             }
//                         })}
//                     </div>
//                 </div>
//             );
//         }

//         return (
//             <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                 <UserPlus size={48} className='mx-auto text-gray-400 mb-4'/>
//                 <h3 className='text-xl font-semibold mb-2'>No Connection Requests</h3>
//                 <p className="text-gray-600">
//                     You don&apos;t have any pending connection requests at the moment
//                 </p>
//                 <p className="text-gray-600 mt-2">
//                     Explore suggested connections below to expand your network!
//                 </p>
//             </div>
//         );
//     };

//     // Safe function to render connections
//     const renderConnections = () => {
//         if (isLoadingConnections) {
//             return (
//                 <div className="bg-white rounded-lg shadow p-6 text-center mb-6">
//                     <div className="animate-pulse">
//                         <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
//                         <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
//                     </div>
//                 </div>
//             );
//         }

//         if (connectionsError) {
//             return (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                     Error loading connections: {connectionsError.message}
//                 </div>
//             );
//         }

//         // Handle different possible data structures
//         let connectionsArray = null;
        
//         try {
//             if (Array.isArray(safeConnections)) {
//                 connectionsArray = safeConnections;
//                 console.log("Using safeConnections directly");
//             } else if (Array.isArray(connections)) {
//                 connectionsArray = connections;
//                 console.log("Using connections directly");
//             } else {
//                 console.log("No valid array found for connections");
//                 connectionsArray = [];
//             }
//         } catch (error) {
//             console.error("Error processing connections:", error);
//             connectionsArray = [];
//         }

//         console.log("Final connectionsArray:", connectionsArray);
//         console.log("Final connectionsArray length:", connectionsArray.length);

//         if (connectionsArray && connectionsArray.length > 0) {
//             return (
//                 <div className='mb-8'>
//                     <h2 className='text-xl font-semibold mb-4'>My Connections ({connectionsArray.length})</h2>
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                         {connectionsArray.map((connection, index) => {
//                             console.log(`Rendering connection ${index}:`, connection);
//                             const key = connection?._id || connection?.id || `connection-${index}`;
//                             console.log(`Using key: ${key}`);
                            
//                             try {
//                                 return (
//                                     <UserCard 
//                                         key={key} 
//                                         user={connection} 
//                                         isConnection={true}
//                                     />
//                                 );
//                             } catch (error) {
//                                 console.error(`Error rendering connection ${index}:`, error);
//                                 return <div key={key}>Error rendering connection</div>;
//                             }
//                         })}
//                     </div>
//                 </div>
//             );
//         }

//         return null;
//     };

//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
//             <div className="col-span-1 lg:col-span-1">
//                 <Sidebar user={user}/>
//             </div>
//             <div className="col-span-1 lg:col-span-3">
//                 <div className="bg-secondary rounded-lg shadow p-6 mb-6">
//                     <h1 className='text-2xl font-bold mb-6'>My Network</h1>
                    
//                     {renderConnectionRequests()}
//                     {renderConnections()}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NetworkPage;

// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios'
// import Sidebar from '../components/Sidebar'
// import { UserPlus } from 'lucide-react'
// import FriendRequest from '../components/FriendRequest'
// import UserCard from '../components/UserCard'

// const NetworkPage = () => {
//   // ✅ Already fetched in App.jsx
//   const { data: user } = useQuery({ queryKey: ["authUser"] });

//   // ✅ Connection Requests
//   const { data: connectionRequests = [] } = useQuery({
//     queryKey: ["connectionRequests"],
//     queryFn: async () => {
//       const res = await axiosInstance.get("/connections/requests");
//       return res.data.data || []; // FIX: return the actual array
//     },
//   });

//   // ✅ Connections
//   const { data: connections = [] } = useQuery({
//     queryKey: ["connections"],
//     queryFn: async () => {
//       const res = await axiosInstance.get("/connections");
//       return res.data.data || []; // FIX: return the actual array
//     },
//   });

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//       {/* Sidebar */}
//       <Sidebar user={user} />

//       {/* Main Content */}
//       <div className="lg:col-span-3 space-y-6">
        
//         {/* Connection Requests */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
//             <UserPlus size={20} />
//             Connection Requests
//           </h2>
//           {connectionRequests.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {connectionRequests.map((req) => (
//                 <FriendRequest key={req._id} request={req} />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No connection requests</p>
//           )}
//         </div>

//         {/* Connections */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2 className="text-lg font-semibold mb-4">Your Connections</h2>
//           {connections.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {connections.map((conn) => (
//                 <UserCard key={conn._id} user={conn} />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No connections yet</p>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NetworkPage


// import { useQuery } from '@tanstack/react-query'
// import React from 'react'
// import { axiosInstance } from '../lib/axios'
// import Sidebar from '../components/Sidebar'
// import { UserPlus } from 'lucide-react'
// import FriendRequest from '../components/FriendRequest'
// import UserCard from '../components/UserCard'

// /** Normalize API responses to always return an array.
//  *  Works for:
//  *   - axios payload = []                      -> []
//  *   - axios payload = { data: [] }            -> []
//  *   - anything else                           -> []
//  */
// const toArray = (payload) => {
//   if (Array.isArray(payload)) return payload
//   if (payload && Array.isArray(payload.data)) return payload.data
//   return []
// }

// const NetworkPage = () => {
//   // If App.jsx already fetched authUser, this is fine too; it's cheap & cached by React Query.
//   const { data: user } = useQuery({ queryKey: ['authUser'] })

//   const { data: connectionRequests = [] } = useQuery({
//     queryKey: ['connectionRequests'],
//     queryFn: async () => {
//       const res = await axiosInstance.get('/connections/requests')
//       return toArray(res.data)
//     },
//     // Optional: gate until user exists to avoid 401 payload shapes
//     enabled: true,
//   })

//   const { data: connections = [] } = useQuery({
//     queryKey: ['connections'],
//     queryFn: async () => {
//       const res = await axiosInstance.get('/connections')
//       return toArray(res.data)
//     },
//     enabled: true,
//   })

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//       {/* Sidebar column */}
//       <div className="col-span-1 lg:col-span-1">
//         <Sidebar user={user} />
//       </div>

//       {/* Main Content */}
//       <div className="lg:col-span-3 space-y-6">
//         {/* Connection Requests */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
//             <UserPlus size={20} />
//             Connection Requests
//           </h2>
//           {connectionRequests.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {connectionRequests.map((req) => (
//                 <FriendRequest key={req._id} request={req} />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No connection requests</p>
//           )}
//         </div>

//         {/* Connections */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <h2 className="text-lg font-semibold mb-4">Your Connections</h2>
//           {connections.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {connections.map((conn) => (
//                 <UserCard key={conn._id} user={conn} isConnection />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">No connections yet</p>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NetworkPage

// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { axiosInstance } from '../lib/axios';
// import Sidebar from '../components/Sidebar';
// import UserCard from '../components/UserCard';
// import FriendRequest from '../components/FriendRequest';

// const NetworkPage = () => {
//   // get logged in user
//   const { data: authUser, isLoading: userLoading } = useQuery({
//     queryKey: ['authUser'],
//     queryFn: () => axiosInstance.get('/auth/me').then(res => res.data),
//   });

//   // get pending requests
//   const { data: connectionRequests, isLoading: requestsLoading } = useQuery({
//     queryKey: ['connectionRequests'],
//     queryFn: () => axiosInstance.get('/connections/requests').then(res => res.data),
//   });

//   // get accepted connections
//   const { data: connections, isLoading: connectionsLoading } = useQuery({
//     queryKey: ['connections'],
//     queryFn: () => axiosInstance.get('/connections').then(res => res.data),
//   });

//   if (userLoading || requestsLoading || connectionsLoading) {
//     return <div className="p-6">Loading...</div>;
//   }

//   if (!authUser) {
//     return <div className="p-6">Not authenticated</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
//       {/* Sidebar */}
//       <div className="lg:col-span-1">
//         <Sidebar />
//       </div>

//       {/* Main content */}
//       <div className="lg:col-span-3 space-y-6">
//         {/* Pending Friend Requests */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4">Connection Requests</h2>
//           {connectionRequests && connectionRequests.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {connectionRequests.map((req) => {
//                 // decide which one is the "other user"
//                 const otherUser =
//                   req.sender._id === authUser._id ? req.recipient : req.sender;
//                 return (
//                   <FriendRequest
//                     key={req._id}
//                     request={req}
//                     otherUser={otherUser}
//                   />
//                 );
//               })}
//             </div>
//           ) : (
//             <p className="text-gray-500">No pending requests</p>
//           )}
//         </section>

//         {/* Connections */}
//         <section>
//           <h2 className="text-xl font-semibold mb-4">Your Connections</h2>
//           {connections && connections.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {connections.map((conn) => {
//                 const otherUser =
//                   conn.sender._id === authUser._id
//                     ? conn.recipient
//                     : conn.sender;
//                 return <UserCard key={conn._id} user={otherUser} isConnection />;
//               })}
//             </div>
//           ) : (
//             <p className="text-gray-500">You have no connections yet</p>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;

// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { axiosInstance } from "../lib/axios";
// import Sidebar from "../components/Sidebar";
// import UserCard from "../components/UserCard";
// import FriendRequest from "../components/FriendRequest";

// const fetchConnections = async () => {
//   const res = await axiosInstance.get("/connections");
//   return res.data;
// };

// const fetchRequests = async () => {
//   const res = await axiosInstance.get("/connections/requests");
//   return res.data;
// };

// const NetworkPage = () => {
//   // user already fetched in App.jsx, so not re-fetching
//   const {
//     data: connections,
//     isLoading: connectionsLoading,
//     isError: connectionsError,
//   } = useQuery({ queryKey: ["connections"], queryFn: fetchConnections });

//   const {
//     data: requests,
//     isLoading: requestsLoading,
//     isError: requestsError,
//   } = useQuery({ queryKey: ["connectionRequests"], queryFn: fetchRequests });

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//       {/* Sidebar */}
//       <div className="lg:col-span-1">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="lg:col-span-3 space-y-6">
//         {/* Connection Requests */}
//         <div className="bg-white rounded-2xl shadow p-4">
//           <h2 className="text-lg font-semibold mb-3">Connection Requests</h2>
//           {requestsLoading && <p>Loading requests...</p>}
//           {requestsError && <p className="text-red-500">Error loading requests</p>}
//           {Array.isArray(requests) && requests.length > 0 ? (
//             requests.map((req) => (
//               <FriendRequest key={req._id} request={req} />
//             ))
//           ) : (
//             !requestsLoading && <p className="text-gray-500">No pending requests</p>
//           )}
//         </div>

//         {/* Connections */}
//         <div className="bg-white rounded-2xl shadow p-4">
//           <h2 className="text-lg font-semibold mb-3">Your Connections</h2>
//           {connectionsLoading && <p>Loading connections...</p>}
//           {connectionsError && <p className="text-red-500">Error loading connections</p>}
//           {Array.isArray(connections) && connections.length > 0 ? (
//             connections.map((conn) => (
//               <UserCard key={conn._id} user={conn} />
//             ))
//           ) : (
//             !connectionsLoading && <p className="text-gray-500">No connections yet</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;


// import { useQuery } from "@tanstack/react-query";
// import { axiosInstance } from "../lib/axios";
// import Sidebar from "../components/Sidebar";
// import { UserPlus } from "lucide-react";
// import FriendRequest from "../components/FriendRequest";
// import UserCard from "../components/UserCard";

// const NetworkPage = () => {
// 	const { data: user, isLoading: userLoading } = useQuery({
// 		queryKey: ["authUser"],
// 		queryFn: () => axiosInstance.get("/auth/me").then(res => res.data),
// 	});

// 	const { data: connectionRequests, isLoading: requestsLoading } = useQuery({
// 		queryKey: ["connectionRequests"],
// 		queryFn: () => axiosInstance.get("/connections/requests").then(res => res.data),
// 	});

// 	const { data: connections, isLoading: connectionsLoading } = useQuery({
// 		queryKey: ["connections"],
// 		queryFn: () => axiosInstance.get("/connections").then(res => res.data),
// 	});

// 	if (userLoading || requestsLoading || connectionsLoading) {
// 		return (
// 			<div className="flex items-center justify-center h-screen">
// 				<p className="text-gray-500">Loading network...</p>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
// 			<div className="col-span-1 lg:col-span-1">
// 				<Sidebar user={user} />
// 			</div>
// 			<div className="col-span-1 lg:col-span-3">
// 				<div className="bg-secondary rounded-lg shadow p-6 mb-6">
// 					<h1 className="text-2xl font-bold mb-6">My Network</h1>

// 					{/* Connection Requests */}
// 					{connectionRequests && connectionRequests.length > 0 ? (
// 						<div className="mb-8">
// 							<h2 className="text-xl font-semibold mb-2">Connection Requests</h2>
// 							<div className="space-y-4">
// 								{connectionRequests.map((request) => (
// 									<FriendRequest key={request._id} request={request} />
// 								))}
// 							</div>
// 						</div>
// 					) : (
// 						<div className="bg-white rounded-lg shadow p-6 text-center mb-6">
// 							<UserPlus size={48} className="mx-auto text-gray-400 mb-4" />
// 							<h3 className="text-xl font-semibold mb-2">No Connection Requests</h3>
// 							<p className="text-gray-600">
// 								You don&apos;t have any pending connection requests at the moment.
// 							</p>
// 							<p className="text-gray-600 mt-2">
// 								Explore suggested connections below to expand your network!
// 							</p>
// 						</div>
// 					)}

// 					{/* Connections */}
// 					{connections && connections.length > 0 && (
// 						<div className="mb-8">
// 							<h2 className="text-xl font-semibold mb-4">My Connections</h2>
// 							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// 								{connections.map((connection) => (
// 									<UserCard key={connection._id} user={connection} isConnection />
// 								))}
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default NetworkPage;

// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { axiosInstance } from "../lib/axios";
// import Sidebar from "../components/Sidebar";
// import FriendRequest from "../components/FriendRequest";
// import UserCard from "../components/UserCard";

// const NetworkPage = () => {
//   // ✅ Fetch pending friend requests
//   const { data: connectionRequests = [], isLoading: loadingRequests } = useQuery({
//     queryKey: ["connectionRequests"],
//     queryFn: () =>
//       axiosInstance.get("/connections/requests").then((res) => res.data),
//   });

//   // ✅ Fetch accepted connections
//   const { data: connections = [], isLoading: loadingConnections } = useQuery({
//     queryKey: ["connections"],
//     queryFn: () =>
//       axiosInstance.get("/connections").then((res) => res.data),
//   });

//   if (loadingRequests || loadingConnections) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-gray-600">Loading network...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
//       {/* Sidebar */}
//       <div className="hidden lg:block">
//         <Sidebar />
//       </div>

//       {/* Main content */}
//       <div className="lg:col-span-3 space-y-6">
//         {/* Friend Requests */}
//         <div className="bg-white shadow rounded-2xl p-4">
//           <h2 className="text-xl font-semibold mb-4">Friend Requests</h2>
//           {connectionRequests.length > 0 ? (
//             connectionRequests.map((request) => (
//               <FriendRequest key={request._id} request={request} />
//             ))
//           ) : (
//             <p className="text-gray-500">No pending requests.</p>
//           )}
//         </div>

//         {/* Connections */}
//         <div className="bg-white shadow rounded-2xl p-4">
//           <h2 className="text-xl font-semibold mb-4">Your Connections</h2>
//           {connections.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {connections.map((conn) => (
//                 <UserCard key={conn._id} user={conn} />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">You have no connections yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;


// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { axiosInstance } from "../lib/axios";
// import Sidebar from "../components/Sidebar";
// import FriendRequest from "../components/FriendRequest";
// import UserCard from "../components/UserCard";

// const NetworkPage = () => {
//   // Friend requests
//   const {
//     data: connectionRequests,
//     isLoading: loadingRequests,
//     isError: errorRequests,
//   } = useQuery({
//     queryKey: ["connectionRequests"],
//     queryFn: async () => {
//       const res = await axiosInstance.get("/connections/requests");
//       // Ensure always array
//       return Array.isArray(res.data) ? res.data : [];
//     },
//     refetchOnWindowFocus: false, // 🔒 prevent auto refetch on focus
//     retry: false, // 🔒 don’t retry if fails
//   });

//   // Connections
//   const {
//     data: connections,
//     isLoading: loadingConnections,
//     isError: errorConnections,
//   } = useQuery({
//     queryKey: ["connections"],
//     queryFn: async () => {
//       const res = await axiosInstance.get("/connections");
//       return Array.isArray(res.data) ? res.data : [];
//     },
//     refetchOnWindowFocus: false,
//     retry: false,
//   });

//   if (loadingRequests || loadingConnections) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-gray-600">Loading network...</p>
//       </div>
//     );
//   }

//   if (errorRequests || errorConnections) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-red-500">Failed to load network data.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
//       {/* Sidebar */}
//       <div className="hidden lg:block">
//         <Sidebar />
//       </div>

//       {/* Main content */}
//       <div className="lg:col-span-3 space-y-6">
//         {/* Friend Requests */}
//         <div className="bg-white shadow rounded-2xl p-4">
//           <h2 className="text-xl font-semibold mb-4">Friend Requests</h2>
//           {connectionRequests.length > 0 ? (
//             connectionRequests.map((request) => (
//               <FriendRequest key={request._id} request={request} />
//             ))
//           ) : (
//             <p className="text-gray-500">No pending requests.</p>
//           )}
//         </div>

//         {/* Connections */}
//         <div className="bg-white shadow rounded-2xl p-4">
//           <h2 className="text-xl font-semibold mb-4">Your Connections</h2>
//           {connections.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {connections.map((conn) => (
//                 <UserCard key={conn._id} user={conn} />
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">You have no connections yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;


import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosInstance } from "../lib/axios";
import Sidebar from "../components/Sidebar";
import FriendRequest from "../components/FriendRequest";
import UserCard from "../components/UserCard";

const NetworkPage = () => {
  // ✅ Fetch logged-in user
  const { data: user = {}, isLoading: userLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data || {};
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  // ✅ Fetch connection requests
  const { data: connectionRequests = [], isLoading: loadingRequests } = useQuery({
    queryKey: ["connectionRequests"],
    queryFn: async () => {
      const res = await axiosInstance.get("/connections/requests");
      return Array.isArray(res.data) ? res.data : [];
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  // ✅ Fetch connections
  const { data: connections = [], isLoading: loadingConnections } = useQuery({
    queryKey: ["connections"],
    queryFn: async () => {
      const res = await axiosInstance.get("/connections");
      return Array.isArray(res.data) ? res.data : [];
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  // ✅ Loading fallback
  if (userLoading || loadingRequests || loadingConnections) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading network...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar user={user} />
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Friend Requests */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-4">Friend Requests</h2>
          {connectionRequests.length > 0 ? (
            connectionRequests.map((request) => (
              <FriendRequest key={request._id} request={request} />
            ))
          ) : (
            <p className="text-gray-500">No pending requests.</p>
          )}
        </div>

        {/* Connections */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-4">Your Connections</h2>
          {connections.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {connections.map((conn) => (
                <UserCard key={conn._id} user={conn} isConnection={true} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">You have no connections yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;



