export const USERS = {
  1: {
    id: 1,
    email: '123@learn.io',
    password: 'testpass',
    roles: ['STUDENT'],
  },
  2: {
    id: 2,
    email: 'admin@learn.io',
    password: 'Strong123',
    roles: ['ADMIN'],
  },
};

export function findAllUsers() {
  return <any[]>Object.values(USERS);
}

export function authenticate(email: string, password: string) {
  const user: any = Object.values(USERS).find((user) => user.email === email);
  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
/*
export const CRANES: any = {
  14: {
    id: 14,
    name: 'LTM 1030-2.1',
    url: 'ltm_1030',
    iconUrl: 'https://www.liebherr.com/external/products/products-assets/082d62e5-da9a-44b2-8e36-2afb0d926233/IMG_390x390/liebherr-truck-mixer-HTM-705.jpg',
    category: 'WHEEL_CRANE',
    loadCapacity: 35,
    telescopicBoom: 30,
    maxHeight: 44,
    maxRadius: 40,
    axles: 2,
    description: 'Super powerful device',
    seqNo: 0,
  },
  4: {
    id: 4,
    axles: 2,
    loadCapacity: 40,
    maxHeight: 44,
    maxRadius: 38,
    name: 'LTM 1040-2.1',
    url: 'ltm_1040',
    description: 'Nice friendly yellow color',
    telescopicBoom: 35,
    category: 'WHEEL_CRANE',
    iconUrl: 'https://img.directindustry.com/images_di/photo-mg/16233-17083443.webp',
    seqNo: 1,
  },
  2: {
    id: 2,
    axles: 3,
    loadCapacity: 50,
    maxHeight: 54,
    maxRadius: 44,
    name: 'LTM 1050-3.1',
    url: 'ltm_1050',
    description: 'Heavy machine',
    telescopicBoom: 38,
    iconUrl: 'https://images.bigge.com/equipment/LIEBHERR-LTM-1055.jpg',
    category: 'WHEEL_CRANE',
    seqNo: 2,
  },

  3: {
    id: 3,
    axles: 2,
    loadCapacity: 35,
    maxHeight: 35,
    maxRadius: 35,
    name: 'LTM 1030-2.1',
    url: 'ltm_1030_2',
    description: 'Can drive everywhere',
    telescopicBoom: 35,
    iconUrl: 'https://specs.lectura.de/models/renamed/orig/at-krane-ltm-1030-2-1--liebherr(4).jpg',
    category: 'WHEEL_CRANE',
    seqNo: 3,
  },
  1: {
    id: 1,
    axles: 3,
    loadCapacity: 65,
    maxHeight: 35,
    maxRadius: 3,
    name: 'Random crane',
    url: 'random_crane',
    description: 'Popular product',
    telescopicBoom: 45,
    iconUrl: 'https://specs.lectura.de/models/renamed/orig/at-krane-ltm-1030-2-1--liebherr(5).jpg',
    category: 'WHEEL_CRANE',
    seqNo: 4,
  },
  12: {
    id: 12,
    axles: 3,
    loadCapacity: 50,
    maxHeight: 54,
    maxRadius: 44,
    name: 'LTM 1050-3.1',
    url: 'ltm_1050_2',
    description: 'You will get used to it',
    telescopicBoom: 38,
    iconUrl: 'https://www.liebherr.com/external/products/products-assets/c85c86d7-a9fb-4d96-b0f0-3451de5ede60/IMG_210x210/liebherr-ltm-1050-3.1-frei.jpg',
    category: 'WHEEL_CRANE',
    seqNo: 5,
  },
  6: {
    id: 6,
    axles: 3,
    loadCapacity: 55,
    maxHeight: 56,
    maxRadius: 46,
    name: 'LTM 1055-3.2',
    url: 'ltm_1055',
    description: 'Something to describe',
    telescopicBoom: 40,
    iconUrl: 'https://www.liebherr.com/external/products/products-assets/fe3ed275-a4a8-48e6-b555-86e039415207/IMG_210x210/liebherr-ltm-1055-3.2-frei.jpg',
    category: 'WHEEL_CRANE',
    seqNo: 6,
  },

  7: {
    id: 7,
    axles: 3,
    loadCapacity: 60,
    maxHeight: 63,
    maxRadius: 48,
    name: 'LTM 1060-3.1',
    url: 'ltm_1060',
    description: 'Crane. Working crane',
    telescopicBoom: 48,
    iconUrl: 'https://www.liebherr.com/external/products/products-assets/06270f7c-2c00-41d5-bbea-c7c493679f57/IMG_210x210/ltm-1060-3-1-frei.jpg',
    category: 'WHEEL_CRANE',
    seqNo: 7,
  },

  8: {
    id: 8,
    axles: 4,
    loadCapacity: 450,
    maxHeight: 132,
    maxRadius: 103,
    name: 'LTM 1450-8.1',
    url: 'ltm_1450',
    telescopicBoom: 85,
    description: 'LTM 1450-8.1',
    iconUrl: 'https://www.liebherr.com/external/products/products-assets/f600c681-3b68-432f-ae6a-0a167acce8e4-2/IMG_210x210/ltm-1450-8.1-frei.jpg',
    category: 'WHEEL_CRANE',
    seqNo: 8,
  },

  9: {
    id: 9,
    axles: 4,
    loadCapacity: 450,
    maxHeight: 132,
    maxRadius: 103,
    name: 'LR 1450-8.1',
    url: 'lr_1450',
    telescopicBoom: 85,
    iconUrl: 'https://www.liebherr.com/external/products/products-assets/830a6681-563d-424d-986b-aceecd3053a4/IMG_1200x1200/liebherr-lr-1200-unplugged-crawler-crane-zero-emission-battery-e-antrieb-rau.jpg',
    category: 'CRAWLER_CRANE',
    seqNo: 9,
  },

  10: {
    id: 10,
    axles: 3,
    loadCapacity: 60,
    maxHeight: 63,
    maxRadius: 48,
    name: 'LR 1060-3.1',
    url: 'lr_1060',
    description: 'Crane. Working crane',
    telescopicBoom: 48,
    iconUrl: 'https://t.pimg.jp/048/259/290/1/48259290.jpg',
    category: 'CRAWLER_CRANE',
    seqNo: 10,
  },

  11: {
    id: 11,
    axles: 2,
    loadCapacity: 35,
    maxHeight: 35,
    maxRadius: 35,
    name: 'LR 1030-2.1',
    url: 'lr_1030',
    description: 'Can drive everywhere and make everything',
    telescopicBoom: 35,
    iconUrl: 'https://p.turbosquid.com/ts-thumb/HW/4zHUcI/vTF4kD75/crawlercrane_2/jpg/1412959788/600x600/fit_q87/755d69ffeadae2b3f85c5150e6a70f2031d5c223/crawlercrane_2.jpg',
    category: 'CRAWLER_CRANE',
    seqNo: 11,
  },
};


export function findAllCranes() {
  return Object.values(CRANES);
}

export function findCraneById(craneId: number) {
  return CRANES[craneId];
}


*/
