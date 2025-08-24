"use client";

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';

const quizQuestions = [
  {
    question: "Face à un imprévu, ta première réaction est...",
    answers: [
      { text: "De chercher une solution, vite.", profile: "control" },
      { text: "D'observer pour comprendre ce qui se passe.", profile: "flow" },
      { text: "De pester contre le sort.", profile: "chaos" },
    ],
  },
  {
    question: "Pour toi, une journée 'efficace' c'est...",
    answers: [
      { text: "Une to-do list entièrement cochée.", profile: "control" },
      { text: "Une journée où tu as suivi ton énergie.", profile: "flow" },
      { text: "Une journée sans catastrophe majeure.", profile: "chaos" },
    ],
  },
  {
    question: "Laquelle de ces métaphores te parle le plus ?",
    answers: [
      { text: "L'architecte qui conçoit le plan.", profile: "control" },
      { text: "Le danseur qui improvise avec la musique.", profile: "flow" },
      { text: "Le funambule qui essaie de ne pas tomber.", profile: "chaos" },
    ],
  },
];

const results = {
  control: {
    title: "Le Pilote Précis",
    description: "Tu aimes avoir le contrôle, et c'est une force. Tu sais où tu vas. Mais n'oublie pas que parfois, les plus beaux paysages se découvrent en quittant l'autoroute. Et si tu laissais un peu de place à l'imprévu ?",
  },
  flow: {
    title: "Le Danseur du Chaos",
    description: "Tu as une capacité naturelle à t'adapter et à suivre le courant. C'est précieux. Ton défi ? T'assurer que tu n'es pas juste en train de dériver. Parfois, un coup de gouvernail, même petit, change tout.",
  },
  chaos: {
    title: "L'Aventurier Hésitant",
    description: "Tu sens bien que le chaos est partout, et ça te fatigue. C'est normal. La bonne nouvelle ? Tu n'as pas besoin de le combattre. Juste d'apprendre quelques pas de danse. Commence petit. Quelle est la prochaine petite chose que tu peux faire avec intention ?",
  },
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (profile: string) => {
    setAnswers([...answers, profile]);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const counts: { [key: string]: number } = {};
    answers.forEach(answer => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  };

  const resultProfile = showResult ? calculateResult() : null;

  return (
    <PageLayout title="Quel est ton rapport à la complexité ?">
      <div className="max-w-2xl mx-auto">
        {!showResult ? (
          <div>
            <h2 className="text-2xl font-semibold mb-6">{quizQuestions[currentQuestion].question}</h2>
            <div className="space-y-4">
              {quizQuestions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer.profile)}
                  className="w-full text-left p-4 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          resultProfile && (
            <div className="text-center">
              <h2 className="text-3xl font-bold font-serif text-deep-blue">{results[resultProfile as keyof typeof results].title}</h2>
              <p className="mt-4 text-lg">{results[resultProfile as keyof typeof results].description}</p>
              <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Prêt.e à aller plus loin ?</h3>
                <p className="mt-2">Laisse ton email pour recevoir des explorations et des outils adaptés à ton profil.</p>
                <form className="mt-4 flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="ton.email@example.com"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-deep-blue"
                  />
                  <Button type="submit">Recevoir</Button>
                </form>
              </div>
            </div>
          )
        )}
      </div>
    </PageLayout>
  );
}
