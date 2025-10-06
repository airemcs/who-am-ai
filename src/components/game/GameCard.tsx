import { useState } from "react";
import { GameCounter } from "./GameCounter";
import { GameOption } from "./GameOption";
import { GameButton } from "./GameButton";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's my favorite programming language?",
    options: ["JavaScript", "Python", "TypeScript", "Java"],
  },
  {
    id: 2,
    question: "Which frontend framework do I use most?",
    options: ["React", "Vue", "Angular", "Svelte"],
  },
  {
    id: 3,
    question: "What is my household nickname?",
    options: ["Pau", "Paw", "Pao", "Phao"],
  },
];

export default function GameCard() {

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const question = questions[current];
  const selected = answers[current];

  const handleSelect = (option: string) => {
    const updated = [...answers];
    updated[current] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      console.log("User answers:", answers);
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
  <div className="relative rounded-2xl shadow-2xl bg-white border-1 border-gray-200 px-6 py-6 mx-6 flex flex-col gap-y-4
                  w-full md:max-w-lg lg:max-w-xl">
  
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold">As a developer.. ☝️🤓</span>
      <GameCounter current={current} total={questions.length} />
    </div>

    <hr className="w-full" />

    <div className="flex flex-col gap-y-4">
      <span className="text-lg md:text-lg font-semibold">{question.question}</span>

      <GameOption
        options={question.options}
        selected={selected}
        onSelect={handleSelect}
        name={`quiz-${question.id}`}
      />

      <div className="flex flex-row gap-x-4">
        <GameButton variant="back" onClick={handleBack} disabled={current === 0} hidden={current === 0} />
        <GameButton variant="next" onClick={handleNext} disabled={!selected} />
      </div>
    </div>

  </div>
  )
}