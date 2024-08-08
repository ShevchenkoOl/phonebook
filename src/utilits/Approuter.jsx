import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spiner';
import { Privatroutes, Publicroutes,  } from 'router/router';
import { nanoid } from 'nanoid';

const Approuter = () => {
const isLogin = true;

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
{isLogin ? Privatroutes.map(route => (
          <Route
            key={nanoid()}
            element={route.element}
            path={route.path}
          />
        )) : Publicroutes.map(route => (
          <Route
            key={nanoid()}
            element={route.element}
            path={route.path}
          />))
        } 
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
        <Route path="*" element={<Navigate to="/" />} /> {/*Перенаправление на домашнюю страницу для всех неизвестных маршрутов */}
      </Routes>
    </Suspense>
  );
};

export default Approuter;
