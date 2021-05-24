import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  font-family: 'PT Sans Caption', sans-serif;
  color: #555555;
  background-color: #E5E5E5;
  margin: 0;
}

#root {
  margin: 0 auto;
}

.mt-0 {
  margin-top: 0 !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.ml-0 {
  margin-left: 0 !important;
}
.mr-0 {
  margin-right: 0 !important;
}
`;
