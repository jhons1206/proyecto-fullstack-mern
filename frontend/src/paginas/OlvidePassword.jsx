import { Link } from "react-router-dom";

const OlvidePassword = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-4xl">
                    Recupera tu acceso y no pierdas {''}
                    <span className="text-black">tus Pacientes</span>
                </h1>
            </div>

            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                <form>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                        <input type="email" placeholder="Email de recuperación" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
                    </div>

                    <input type="submit" value="Enviar Instrucciones" className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase px-10 font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 transition ease-in-out duration-500 md:w-auto" />

                    <nav className="mt-10 lg:flex lg:justify-between">
                        <Link className="block text-center my-5 text-gray-500" to="/">
                            ¿Ya tienes una cuenta? Inicia Sesión
                        </Link>
                        <Link className="block text-center my-5 text-gray-500" to="/registrar">
                            ¿No tienes una cuenta? Regístrate
                        </Link>
                    </nav>
                </form>
            </div>
        </>
    );
};

export default OlvidePassword;
