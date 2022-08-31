import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
export default function MeetupItem(p) { 
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(p.id);
    function toogleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(p.id);
        }else{
            favoritesCtx.addFavorite({
                id:p.id,
                title:p.title,
                description:p.description,
                image:p.image,
                address:p.address
            });
        }
    }
    return <li className={classes.item}>
                <Card>
                    <div className={classes.image}>
                        <img src={p.image} alt={p.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{p.title}</h3>
                        <address>{p.address}</address>
                        <p>{p.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={toogleFavoriteStatusHandler}>
                            {itemIsFavorite ? 'removeFromFavorites' : 'To Favorites'}
                        </button>
                    </div>
                </Card>
            </li>;
}