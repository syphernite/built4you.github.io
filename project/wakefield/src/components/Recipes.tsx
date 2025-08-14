import React from 'react';
import { Clock, Zap, ExternalLink } from 'lucide-react';

const Recipes = () => {
  const base = import.meta.env.BASE_URL; // handles subpaths like /yourrepo/

  const recipes = [
    {
      title: 'High-Protein Cinema Nachos',
      image: `${base}images/steak.png`,
      calories: '420 cal',
      protein: '35g protein',
      time: '15 min'
    },
    {
      title: 'BBQ Beef Bowl Meal Prep',
      image: `${base}images/shrimp-pasta.png`,
      calories: '484 cal',
      protein: '50g protein',
      time: '25 min'
    },
    {
      title: 'Coconut Yogurt Bowl',
      image: `${base}images/chicken-curry.png`,
      calories: '320 cal',
      protein: '22g protein',
      time: '5 min'
    }
  ];

  return (
    <section className="py-20 bg-white" id="recipes">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fuel Your Body. <span className="text-orange-500">Love Every Bite.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delicious, macro-friendly recipes that prove healthy eating doesn't have to be boring. 
            Every recipe is designed to fuel your workouts and satisfy your cravings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{recipe.title}</h3>

                <div className="flex items-center justify-between mb-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    <span className="font-medium">{recipe.calories}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-orange-500">{recipe.protein}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{recipe.time}</span>
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-bold transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Get Recipe</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
