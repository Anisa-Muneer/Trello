import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    InboxIcon,
} from "@heroicons/react/24/solid";


function AdminSidebar() {

    return (
        <>
            <div className='flex flex-col'>

                <Card className=" w-full max-w-[20rem] shadow-xl bg-black shadow-black rounded-none border border-gray-900 p-4">
                    <List>
                        <ListItem >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Board
                        </ListItem>
                        <ListItem >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Home
                        </ListItem>
                        <ListItem >
                            <ListItemPrefix >
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Mail

                        </ListItem>
                        <ListItem >
                            <ListItemPrefix >
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Feed
                        </ListItem>
                    </List>
                    <hr className="border border-gray-300 px-8 mt-8" />
                </Card>


                <Card className="w-full max-w-[20rem] shadow-xl bg-black shadow-black rounded-none border border-gray-900 p-4">
                    <div className="mb-2 p-4">
                        <Typography variant="h5" color="blue-gray">
                            BOARDS
                        </Typography>
                    </div>
                    <List>
                        <ListItem >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Board
                        </ListItem>
                        <ListItem >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Home
                        </ListItem>
                        <ListItem >
                            <ListItemPrefix >
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Mail

                        </ListItem>
                        <ListItem >
                            <ListItemPrefix >
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Feed
                        </ListItem>
                    </List>
                    <hr className="border border-gray-300 px-8 mt-8" />
                </Card>

            </div>

        </>

    );
}

export default AdminSidebar
