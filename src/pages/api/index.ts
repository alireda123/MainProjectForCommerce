import { pusher } from '../../lib';

export default async function handler(req, res) {
  const { message, username } = req.body;

  await pusher.trigger('presence-channel', 'chat-update', {
    message,
    username,
  });

  res.status(200).json('200');
}
