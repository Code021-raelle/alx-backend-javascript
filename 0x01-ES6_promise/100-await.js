import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto('photo-profile-1.jpg');
    const userPromise = createUser('Guillaume', 'Salva');

    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error('Error:', error.message);
    return {
      photo: null,
      user: null,
    };
  }
}
