import { Sync } from 'factory.ts';
import User from 'src/mobx/user';

const noop = () => undefined;

const userFactory = Sync.makeFactory<User>({
    name: 'Balzee',
    cards: [],
    setUsername: noop
});

export default userFactory;
