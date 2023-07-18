type TodoItemProps = {
  title: string;
  isComplete: boolean;
  id: string;
  toggleTodo: (id: string, complete: boolean) => void;
};

export default function TodoItem({
  title,
  isComplete,
  id,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={isComplete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through ">
        {title}
      </label>
    </li>
  );
}
