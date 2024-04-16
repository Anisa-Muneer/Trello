import Task from "../Models/taskModel.js";


export const addList = async (req, res, next) => {
    try {
        const { taskName } = req.body;
        const exist = await Task.findOne({
            taskName: taskName,
        });

        if (exist) {
            return res.status(200).json({ created: false, message: 'Task already exists' });
        }
        const newTask = new Task({
            taskName: taskName,
        });

        let updated = await newTask.save()
        if (updated) {
            return res.status(200).json({ created: true, message: 'Task added' });
        } else {
            return res.status(500).json({ error: 'Failed to update the new task' });
        }

    } catch (error) {
        console.error('Error in addList:', error);
        return res.status(500).json({ error: error.message });
    }
};

export const toDo = async (req, res, next) => {
    try {

        const task = await Task.find({ status: false })


        return res.status(200).json({ data: task, message: 'Category is added' })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const manageList = async (req, res, next) => {
    try {
        const id = req.params.id
        let list = await Task.updateMany(
            { _id: id }, { $set: { status: true } }

        );
        if (list) {

            res.status(200).json({
                message: list.status ? "list Deleted" : "list Listed",
            });
        } else {
            res.status(404).json({ message: "list not found" });
        }

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}