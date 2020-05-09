import React from 'react'
import ReactDOM from 'react-dom'
import ChatBot from 'react-simple-chatbot'

const App = () => {
    return (
        <>
            <ChatBot
                headerTitle='Bibop'
                recognitionEnable={true}
                steps={[
                    {
                        id: 'greet',
                        message: 'Hey! Welcome to Bibop',
                        trigger: '1'
                    },
                    {
                        id: '1',
                        message: 'I\'m here to entertain you.',
                        trigger: 'name'
                    },
                    {
                        id: 'name',
                        message: 'What\'s your name?',
                        trigger: 'nameEntry'
                    },
                    {
                        id: 'nameEntry',
                        user: true,
                        trigger: 'gameOptions'
                    },
                    {
                        id: 'gameOptions',
                        message: 'Hi {previousValue}! What would you like to play?',
                        trigger: 2
                    },
                    {
                        id: 'gameOptions2',
                        message: 'What would you like to play now?',
                        trigger: 2
                    },
                    {
                        id: 2,
                        options: [
                            { value: 1, label: 'Guess the city', trigger: 'city' },
                            { value: 2, label: 'Rock Paper Scissors', trigger: 'rps' }
                        ]
                    },
                    {
                        id: 'city',
                        message: 'I am the City of Love',
                        trigger: 'cityOptions'
                    },
                    {
                        id: 'cityOptions',
                        options: [
                            { value: 1, label: 'London', trigger: 'lose' },
                            { value: 2, label: 'Amsterdam', trigger: 'lose' },
                            { value: 3, label: 'Paris', trigger: 'win' }
                        ]
                    },
                    {
                        id: 'lose',
                        message: 'Wrong answer. Try again!',
                        trigger: 'cityOptions'
                    },
                    {
                        id: 'win',
                        message: 'Correct! Paris is called the "City of Love" for a number of reasons, including its sights, its native language and its popularity as a honeymoon destination. Standing above the city is the most romantic of places, the Eiffel Tower.',
                        trigger: 'replay'
                    },
                    {
                        id: 'rps',
                        message: 'Choose your option!',
                        trigger: 'rpsOptions'
                    },
                    {
                        id: 'rpsOptions',
                        options: [
                            { value: 1, label: 'Rock', trigger: 'xrps' },
                            { value: 2, label: 'Paper', trigger: 'winrps' },
                            { value: 3, label: 'Scissors', trigger: 'loserps' }
                        ]
                    },
                    {
                        id: 'xrps',
                        message: 'It\'s a draw! I also picked Rock',
                        trigger: 'replay'
                    },
                    {
                        id: 'loserps',
                        message: 'Sorry you loss. I picked Rock :)',
                        trigger: 'replay'
                    },
                    {
                        id: 'winrps',
                        message: 'Congratulation! You won, I picked Rock :)',
                        trigger: 'replay'
                    },
                    {
                        id: 'replay',
                        message: 'Would you like to play again?',
                        trigger: 'replayOptions'
                    },
                    {
                        id: 'replayOptions',
                        options: [
                            { value: 1, label: 'Yes', trigger: 'gameOptions2'},
                            { value: 2, label: 'No', trigger: 'end'}
                        ]
                    },
                    {
                        id: 'end',
                        message: 'Hope you had fun. See you soon! *bip bop*',
                        end: true
                    }
                ]}
            />
        </>
    )
}

const ROOT = document.getElementById('root')
ReactDOM.render(<App />, ROOT)