"use client";

import { createContext, useContext, useMemo, useState } from "react";

import { studyStats, subjects, tasks as starterTasks, weeklySchedule } from "@/data/dummyData";

const StudyBuddyContext = createContext(null);

export function StudyBuddyProvider({ children }) {
  const [tasks, setTasks] = useState(starterTasks);

  const addTask = (newTask) => {
    if (!newTask?.title?.trim() || !newTask?.subject?.trim()) {
      return;
    }

    setTasks((currentTasks) => [
      {
        id: Date.now(),
        title: newTask.title.trim(),
        subject: newTask.subject.trim(),
        due: newTask.due || "Today",
        status: newTask.status || "Planned",
      },
      ...currentTasks,
    ]);
  };

  const removeTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  };

  const value = useMemo(
    () => ({
      stats: studyStats,
      subjects,
      tasks,
      weeklySchedule,
      addTask,
      removeTask,
    }),
    [tasks],
  );

  return (
    <StudyBuddyContext.Provider value={value}>{children}</StudyBuddyContext.Provider>
  );
}

export function useStudyBuddy() {
  const context = useContext(StudyBuddyContext);

  if (!context) {
    throw new Error("useStudyBuddy must be used within a StudyBuddyProvider");
  }

  return context;
}
