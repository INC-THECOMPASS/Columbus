import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

// 빌드할 파일 목록을 정의하는 부분
const entries = [
  {
    input: 'src/utils/formats/index.ts',
    output: 'formats',
    name: 'columbusFormats'
  },
  {
    input: 'src/utils/functions/index.ts',
    output: 'functions',
    name: 'columbusFunctions'
  },
];

// 공통 설정을 세팅 하는 부분
const createConfig = ({ input, output, name }) => ({
  input,
  output: {
    file: `dist/${output}.min.js`,
    format: 'umd',
    name,
    sourcemap: true
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    terser()
  ]
});

export default entries.map(createConfig);