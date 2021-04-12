var tasks = [];

export const AddTask = (task) => 
{
    tasks = [...tasks, task]
}

export const DeletTask = (task) =>
{
    return tasks.filter(v => v === task)
}

export const ListTasks = () =>
{
    return tasks;
}