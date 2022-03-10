import { endAdventure, haveAdventures } from '..';
import { askQuestion, clear, print } from '../console';

const breakfastItems = ['Pizza', 'Cereals', 'Chunky Chips', 'Kebab'] ;


type breakfastItem = typeof breakfastItems[number];

export function selectTheBreakfastItem(name: string) {
	clear(false);
	print('------------------------');
	print(`🥳 Welcome ${name}! 🥳`);
	print('------------------------');
	print('You can see a number of breakfast Items: ');
	breakfastItems.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which item will you choose?', haveBreakfast);
}

export function haveBreakfast(breakfastItem: string): void {
	clear(true);

	//  it might seem like we know this is a number, but of course the user can enter any nonsense to the prompt!
	const number = parseInt(breakfastItem);

	if (isNaN(number)) {
		print(`😮`);
		print(`That's not a valid choice 😭`);
		return endAdventure();
	}

	if (number < 0 || number > breakfastItems.length - 1) {
		print(`😮`);
		print(`${number} is an invalid number 😭`);
		return endAdventure();
	}

	if (breakfastItems[number] === 'Cereals') {
		print(
			'✅ CONGRATULATIONS!Looks like you have had a good and healthy breakfast! You are now all energized to start the tour again!! 🥳'
		);

		return askQuestion(
			'Press ENTER to re-enter Wonderland! ',
			haveAdventures
		);
	} else {
		print('You did not make a healthy choice..Awww! 😱');
		return endAdventure();
	}
}


