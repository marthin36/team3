import {create} from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URL} from '../config/URL';
import {APIS_URL} from '../config/URL';
import * as API from '../config/api';
// import AuthManager from '../../lib/AuthManager'

const api = create({baseURL: API_URL});
const apis = create({baseURL: APIS_URL});

export const getProjectList = () => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_PROJECT_LIST)
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOvertimeList = () => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_OVERTIME_LIST)
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getProjectId = (id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_PROJECT.replace(/{(id)}/, id))
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createMedical = (body) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    console.log(JSON.stringify(body));

    api
      .post(API.CREATE_MEDICAL, JSON.stringify(body))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createOvertime = (body) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    console.log(JSON.stringify(body));

    api
      .post(API.CREATE_OVERTIME, JSON.stringify(body))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const deleteProject = (id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    api
      .delete(API.DELETE_PROJECT.replace(/{(id)}/, id))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const editProject = (body, id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    api
      .put(API.EDIT_PROJECT.replace(/{(id)}/, id), JSON.stringify(body))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getTask = (ProjectId) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    api.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    api
      .get(API.GET_TASK.replace(/{(id)}/, ProjectId))
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

 //Leo
export const createTransport = body => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    apis.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    console.log(JSON.stringify(body));

    apis
      .post(API.CREATE_TRANSPORT, JSON.stringify(body))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getTransports = () => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    apis.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    apis
      .get(API.GET_TRANSPORTS)
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getTransport = (id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    apis.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    apis
      .get(API.GET_TRANSPORT.replace(/{(id)}/, id))
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const createOther = body => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    apis.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
      'Content-Type',
      'application/json',
    );

    console.log(JSON.stringify(body));

    apis
      .post(API.CREATE_OTHER, JSON.stringify(body))
      .then(response => {
        if (response.ok) resolve(response);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOthers = () => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    apis.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    apis
      .get(API.GET_OTHERS)
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getOther = (id) => {
  return new Promise(async (resolve, reject) => {
    const token = await AsyncStorage.getItem('TOKEN');

    // api.setHeader('Authorization', `Bearer ${token}`);
    apis.setHeader(
      'Authorization',
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicHJvZmlsZSI6eyJmaXJzdG5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJnZW5kZXIiOiJNYWxlIiwiZG9iIjoiMjAyMC0wMy0yN1QwMDowMDowMCswMDowMCIsImVtYWlsIjoiYWRtaW5AbW9vbmxheS5jb20ifSwicGVybWlzc2lvbiI6eyJTQURNSU4iOjEsImFwcCI6OTl9LCJpYXQiOjE1OTQxMDMxMTl9.3jkqWMc_WlA7kJ4uxWEGyPoMwpA0Y0qlmdVZYw7mTjc`,
    );

    apis
      .get(API.GET_OTHER.replace(/{(id)}/, id))
      .then(response => {
        if (response.ok) resolve(response.data);
        else reject(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};