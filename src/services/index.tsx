import { Entry } from '../interfaces/entry.interface';
import { Journal } from '../interfaces/journal.interface';
import { User } from '../interfaces/user.interface';
import http from './api';

export const postJournal = async (data: Journal) => await http.post('/journals/', data);
export const getJournals = async (id: string) => await http.get(`/journals/${ id }`);
export const createNote = async (id: string, data: Entry) => await http.post(`/journals/entry/${ id }`, data);
export const getNotes = async (id: string) => await http.get(`/journals/entries/${ id }`);

export const createAccount = async (data: User) => await http.post('/auth/signup', data);
export const login = async (data: {}) => await http.post('/auth/login', data);
