// jest.config.js
export default {
  testEnvironment: 'jsdom', // Configura el entorno para pruebas en el navegador
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transforma archivos .js y .jsx usando babel-jest
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Para manejar módulos CSS
    '\\.png$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(png|jpg|jpeg|gif|svg)$': 'test-file-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Archivo para configuraciones globales de prueba

  
};
