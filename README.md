# React TypeScript Hooks

## useState

- 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해주는 가장 기본적인 Hook
- useStateCounter.tsx
- useStateInfo.tsx

## useEffect

- 리액트 컴포넌트가 렌더링될 때 마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태
- useEffectInfo.tsx

## useReducer

- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook
- useReducerCounter.tsx
- useReducerInfo.tsx

## useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화
- 숫자, 문자열, 객체처럼 일반값 재사용
- useMemoAverage.tsx

## useCallback

- useMemo와 상당히 비슷
- 렌더링 성능 최적화
- 함수 재사용
- useCallbackAverage.tsx

## useRef

- ref를 쉽게 사용
