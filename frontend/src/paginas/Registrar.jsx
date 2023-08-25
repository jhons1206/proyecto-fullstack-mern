import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registrar = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-4xl">
                    Crea tu cuenta y Administra {''}
                    <span className="text-black">tus Pacientes</span>
                </h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <form>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email de Registro" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
                    </div>

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">Repetir Password</label>
                        <input type="password" value={repetirPassword} onChange={(e) => setRepetirPassword(e.target.value)} placeholder="Repite tu password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
                    </div>

                    <input type="submit" value="Crear Cuenta" className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase px-10 font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 transition ease-in-out duration-500 md:w-auto" />

                    <nav className="mt-10 lg:flex lg:justify-between">
                        <Link className="block text-center my-5 text-gray-500" to="/">
                            ¿Ya tienes una cuenta? Inicia Sesión
                        </Link>
                        <Link className="block text-center my-5 text-gray-500" to="/olvide-password">
                            Olvide mi Password
                        </Link>
                    </nav>
                </form>
            </div>
        </>
    );
};

export default Registrar;
