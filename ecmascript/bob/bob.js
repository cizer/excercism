export default function () {

    const responses = {
        shouting: 'Whoa, chill out!',
        question: 'Sure.',
        silent: 'Fine. Be that way!',
        whatever: 'Whatever.'
    };

    const isShouting = (message) => {
        const isShoutingMessage = message === message.toUpperCase();
        const isCaseInsensitive = message.toUpperCase() === message.toLowerCase();
        return isShoutingMessage && !isCaseInsensitive;
    };

    const isQuestion = (message) => message.slice(-1) === "?";

    const isSilent = (message)=>message.trim() === "";

    return {
        hey(message) {

            if(isSilent(message)){
                return responses.silent
            }

            if (isShouting(message)) {
                return responses.shouting
            }

            if (isQuestion(message)) {
                return responses.question
            }

            return responses.whatever
        }
    }
}