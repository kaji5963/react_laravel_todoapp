import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

type Task = {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
};

const TaskPage: React.FC = () => {
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
    const { data:tasks, status } = useQuery("tasks", async () => {
        const { data } = await axios.get<Task[]>("api/tasks ");
        return data;
    });

    if(status === 'loading') {
        return <div className="loader" />
    } else if (status === 'error') {
        return <div className="align-center">データの読み込みに失敗しました。</div>
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">登録されたTODOはありません。</div>
    }

    return (
        <>
            <form className="input-form">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        placeholder="TODOを入力してください。"
                        defaultValue=""
                    />
                    <button className="btn is-primary">追加</button>
                </div>
            </form>
            <div className="inner">
                <ul className="task-list">
                    {tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        className="checkbox-input"
                                    />
                                </label>
                                <div>
                                    <span>{task.title}</span>
                                </div>
                                <button className="btn is-delete">削除</button>
                            </li>
                        );
                    })}

                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <form>
                            <input
                                type="text"
                                className="input"
                                defaultValue="編集中のTODO"
                            />
                        </form>
                        <button className="btn">更新</button>
                    </li>
                    <li className="done">
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div>
                            <span>実行したTODO</span>
                        </div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div>
                            <span>ゴミ捨て</span>
                        </div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div>
                            <span>掃除</span>
                        </div>
                        <button className="btn is-delete">削除</button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default TaskPage;
