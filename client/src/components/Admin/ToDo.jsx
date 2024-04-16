import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import {
    TrashIcon,
    PlusIcon,
    PaperClipIcon,
    ChatBubbleOvalLeftIcon
} from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import { fetchTodo, manageList } from "../../api/adminApi";

export function ToDo() {
    const [list, SetList] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetchTodo()
            if (response.data.data) {
                SetList(response.data)

            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleAction = async (listId) => {
        console.log(listId, 'its an id');
        await manageList(listId);

    };
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div className="">

            < div className="grid grid-cols-3 gap-16 items-center">
                {
                    list.data && list.data.map((item) => {
                        return (
                            <Card className="w-72 bg-gray-900"  >
                                <div className="flex flex-row justify-between mt-2">
                                    <Typography color="blue-gray" className="font-medium mx-6 text-white" textGradient>
                                        To Do
                                    </Typography>
                                    <TrashIcon className="h-5 w-5 text-white mx-4"
                                        onClick={() => handleAction(item._id)}
                                    />
                                </div>

                                <CardBody className="text-center">
                                    <motion.div className="flex justify-between items-center w-64 h-10 rounded-md p-1 border border-gray-800 bg-gray-800" drag>
                                        <div className="flex-grow w-full h-full px-2 bg-transparent">{item.taskName}</div>
                                    </motion.div>
                                </CardBody>

                                <CardFooter className="flex justify-between gap-7 pt-1">
                                    <div className="flex flex-row">
                                        <Typography variant="h4" color="white" className="mb-2">
                                            <PlusIcon className="h-5 w-5 text-white ml-2" />
                                        </Typography>
                                        <Typography color="blue-gray" className="font-normal mx-3 text-white">
                                            Add a card
                                        </Typography>
                                    </div>

                                    <div className="flex flex-row gap-4">
                                        <ChatBubbleOvalLeftIcon className="h-5 w-5 text-white" />
                                        <PaperClipIcon className="h-5 w-5 text-white" />
                                    </div>
                                </CardFooter>
                            </Card>

                        )
                    })
                }
            </div>


        </div >

    );

}