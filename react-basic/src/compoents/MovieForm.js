 import React, {useState} from 'react';
 import InputField from './InputField'
 const MovieForm = ({addMovie}) => {
   const [movieTitle, setmovieTitle] = useState('');
   const [movieYear, setmovieYear] = useState('');
   const [titleError, setTitleError] = useState('');
   const [yearError, setYearError] = useState('');

   const resetform = () => {
     setmovieTitle('');
     setmovieYear('');
   };

   const validateFrom = () => {
     let validated = true;
     if (!movieTitle){
       setTitleError('영화 제목을 입력해주세요');
       validated = false;
     }
     if (!movieYear){
       setYearError('개봉년도를 입력해주세요');
       validated = false;
     }
     return validated;
   };

   const resetErrors = () => {
     setTitleError('');
     setYearError('');
   }

   const onSubmit = (event) => {
     event.preventDefault();
     if (validateFrom()) {
     addMovie({
       id: Date.now(),
       title: movieTitle,
       year: movieYear,
     });
     resetErrors();

   }
     resetform();
   };
 return (
       <form onSubmit={onSubmit}>
         <InputField
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setmovieTitle(e.target.value)}
          errorMessage={titleError}

         />
         <InputField
          type="number"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setmovieYear(e.target.value)}
          errorMessage={yearError}

         />
         <button type="submit">영화추가</button>
       </form>

   );

 };

 export default MovieForm;
 
