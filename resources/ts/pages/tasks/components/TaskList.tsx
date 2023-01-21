import React from "react";
import { useTasks } from "../../../queries/TaskQuery";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
    //axiosでのデータ取得
    // //apiから取得したデータのstate
    // const [tasks, setTasks] = useState<Task[]>([]);
    // //axiosでapiからデータ取得しstateで保持
    // const getTasks = async () => {
    //     const { data } = await axios.get<Task[]>("api/tasks ");
    //     setTasks(data);
    // };
    // //画面表示時にgetTasksを実行しデータ取得
    // useEffect(() => {
    //     getTasks();
    // }, []);

    //react-queryでの取得
    const { data: tasks, status } = useTasks();

    if (status === "loading") {
        return <div className="loader" />;
    } else if (status === "error") {
        return (
            <div className="align-center">データの読み込みに失敗しました。</div>
        );
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">登録されたTODOはありません。</div>;
    }

    return (
        <div className="inner">
            <ul className="task-list">
                {tasks.map((task) => {
                    return <TaskItem key={task.id} task={task} />;
                })}
            </ul>
        </div>
    );
};

export default TaskList;
