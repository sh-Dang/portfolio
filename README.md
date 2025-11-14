# React + Vite

이 템플릿은 HMR 및 일부 ESLint 규칙과 함께 Vite에서 React를 작동시키기 위한 최소한의 설정을 제공합니다.

현재 두 가지 공식 플러그인을 사용할 수 있습니다:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)는 빠른 새로고침을 위해 [Babel](https://babeljs.io/) (또는 [rolldown-vite](https://vite.dev/guide/rolldown)에서 사용될 때 [oxc](https://oxc.rs))을 사용합니다.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/vite-plugin-react-swc)는 빠른 새로고침을 위해 [SWC](https://swc.rs/)를 사용합니다.

## React 컴파일러

React 컴파일러는 개발 및 빌드 성능에 영향을 미치므로 이 템플릿에서는 활성화되어 있지 않습니다. 추가하려면 [이 문서](https://react.dev/learn/react-compiler/installation)를 참조하십시오.

## ESLint 구성 확장

프로덕션 애플리케이션을 개발하는 경우, 타입 인식 린트 규칙이 활성화된 TypeScript를 사용하는 것을 권장합니다. 프로젝트에 TypeScript와 [`typescript-eslint`](https://typescript-eslint.io)를 통합하는 방법에 대한 정보는 [TS 템플릿](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)을 확인하십시오.
