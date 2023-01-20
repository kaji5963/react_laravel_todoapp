import React, { useState } from "react";
import { useCreateTask } from "../../../queries/TaskQuery";

const TaskInput = () => {
    const [title, setTitle] = useState("");
    const createTask = useCreateTask();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTask.mutate(title);
        setTitle("");
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <div className="inner">
                <input
                    value={title}
                    type="text"
                    className="input"
                    placeholder="TODOを入力してください。"
                    // defaultValue={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                    }
                />
                <button className="btn is-primary">追加</button>
            </div>
        </form>
    );
};

export default TaskInput;
