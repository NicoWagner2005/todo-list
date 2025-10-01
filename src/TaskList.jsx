import {use, useMemo, useState} from 'react';
import TaskItem from './TaskItem';

export default function TaskList({todos,onToggleComplete, onDelete }) {
    const [showHighOnly, setShowHighOnly] = useState(false);

    const pendingCount = useMemo(() => {
        return todos.reduce((acc, t) => acc + (t.completed ? 0 : 1), 0);
      }, [todos]);

      const visibleTodos = useMemo(() => {
        if (!showHighOnly) return todos;
        return todos.filter((t) => t.priority === "high");
      }, [todos, showHighOnly]);

      return (
        <section>
            <div>
                <label>
                    <input type="checkbox" checked={setShowHighOnly}             
                    onChange={(e) => setShowHighOnly(e.target.checked)}/>
                    Mostrar solo alta prioridad
                </label>

                <span>
                    Pendientes: {pendingCount}
                </span>
            </div>

            {visibleTodos.length === 0 ? (
                <p>No hay tareas.</p>) : (
                    <ul>
                        {visibleTodos.map((t) => (
                            <TaskItem 
                            key={t.id}
                            id={t.id}
                            text={t.text}
                            completed={t.completed}
                            priority={t.priority}
                            onToggleComplete={onToggleComplete}
                            onDelete={onDelete}
                            />
                        ))}
                    </ul>
                )}
        </section>
      )
}