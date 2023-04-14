import React ,{useState} from "react";
import "./Quiz.css"

function Quiz(){
    const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'U.P', isCorrect: false },
				{ answerText: 'Karnatka', isCorrect: false },
				{ answerText: 'Delhi', isCorrect: true },
				{ answerText: 'Lucknow', isCorrect: false },
			],
		},
		{
			questionText: 'React is created by whom?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'FaceBook', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
			questionText: 'How many minutes are in a full week? ',
			answerOptions: [
				{ answerText: '10030', isCorrect: false },
				{ answerText: '10080', isCorrect: true },
				{ answerText: ' 40000', isCorrect: false },
				{ answerText: '37890', isCorrect: false },
			],
		},
        {
			questionText: 'How many dots appear on a pair of dice ',
			answerOptions: [
				{ answerText: '42', isCorrect: true },
				{ answerText: '32', isCorrect: false },
				{ answerText: ' 40', isCorrect: false },
				{ answerText: '22', isCorrect: false },
			],
		},
        
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (

				<div className='score-section'>
					You scored {score} out of {questions.length}
                    
				</div>
                
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);

}
export default Quiz