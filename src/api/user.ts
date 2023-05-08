import axios from 'axios';

interface User {
  id: number;
  name: string;
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('http://localhost:4000/users');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default { getUsers };
