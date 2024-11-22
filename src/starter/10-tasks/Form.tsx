import { useState } from 'react';
import { type Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputText = formData.get('text') as string;
    console.log(inputText);
    if (!inputText) {
      alert('please input a task');
      return;
    }

    addTask({
      id: new Date().getTime().toString(),
      description: inputText,
      isCompleted: false,
    });

    e.currentTarget.reset();
  };
  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input className="form-input" type="text" name="text" />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
};
export default Form;
