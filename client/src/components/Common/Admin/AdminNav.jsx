import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import {
    CodeBracketSquareIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";
import {
    CalendarDaysIcon
} from "@heroicons/react/24/outline";


function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />

                </Button>
            </MenuHandler>

        </Menu>
    );
}



// nav list component
const navListItems = [

    {
        label: "Calender",
        icon: CalendarDaysIcon,
    },
    {
        label: "Notification",
        icon: CalendarDaysIcon,
    },
    {
        label: "Inbox",
        icon: CodeBracketSquareIcon,
    },
    {
        label: "Leave",
        icon: CodeBracketSquareIcon,
    },
    {
        label: "Attendance",
        icon: CodeBracketSquareIcon,
    },
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">

            {navListItems.map(({ label, icon }, key) => (

                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="gray"
                    className="font-medium text-white"
                >
                    <MenuItem className="flex flex-col items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        <span className="text-white "> {label}</span>
                    </MenuItem>
                </Typography>

            ))
            }

        </ul >
    );
}

export function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar
            variant="gradient"
            className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py:4 rounded-none  bg-black shadow-black">

            <div className="relative mx-auto flex items-center justify-between text-white  bg-black shadow-black">
                < Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Material Tailwind
                </Typography >
                <div className=" lg:block mx-96">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>


                <ProfileMenu />
            </div >
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </Navbar >
    );
}