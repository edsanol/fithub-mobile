const biceps = require('../assets/biceps.webp');
const legs = require('../assets/legs.webp');
const shoulders = require('../assets/shoulders.webp');
const gluteus = require('../assets/gluteus.webp');
const forearm = require('../assets/forearm.webp');
const chest = require('../assets/chest.webp');
const waist = require('../assets/waist.webp');
const calf = require('../assets/calf.webp');
const weight = require('../assets/weight.webp');
const height = require('../assets/height.webp');

export const mapperMuscleNames = (muscle: string) => {
  switch (muscle) {
    case 'Gluteus':
      return 'Gluteos';
    case 'Biceps':
      return 'Biceps';
    case 'Chest':
      return 'Pecho';
    case 'Waist':
      return 'Cintura';
    case 'Thigh':
      return 'Pierna';
    case 'Calf':
      return 'Pantorrilla';
    case 'Shoulders':
      return 'Espalda';
    case 'Forearm':
      return 'Antebrazo';
    case 'Height':
      return 'Estatura';
    case 'Weight':
      return 'Peso';
    default:
      return 'Musculo';
  }
};

export const mapperMuscleIcon = (muscle: string) => {
  switch (muscle) {
    case 'Gluteus':
      return gluteus;
    case 'Biceps':
      return biceps;
    case 'Chest':
      return chest;
    case 'Waist':
      return waist;
    case 'Thigh':
      return legs;
    case 'Calf':
      return calf;
    case 'Shoulders':
      return shoulders;
    case 'Forearm':
      return forearm;
    case 'Height':
      return height;
    case 'Weight':
      return weight;
    default:
      return gluteus;
  }
};
