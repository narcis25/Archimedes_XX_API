import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const postMessage = async (req: Request, res: Response) => {
  res.send('TTTTTT');
  /*const {message} = req.query;

  const ref = firestore().collection('message');
  ref.add({message});
  res.status(200).send('message added');*/
};