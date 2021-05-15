import React from 'react';
import {useState, useEffect, useTranslation, useHeaderHeight} from '@hooks';
import {FlatList, TextInput, KeyboardAvoidingView, Keyboard} from '@components';
import styles from './styles';
import {connect, useDispatch} from 'react-redux';
import {getBooks, searchBooks} from '@reducers/books';
import {TAppState} from '@reducers/index';
import {TBook} from '@types';
import {INITIAL_BOOKS, INITIAL_GLOBAL} from '@reducers/__proto__';
import BookItem from './components/BookItem/BookItem';
import {ListRenderItem, RefreshControl, View} from 'react-native';

const Home: React.FC<TProps> = ({books, _global}) => {
  const {t} = useTranslation();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const headHei = useHeaderHeight();

  const onStartShouldSetResponder = () => {
    Keyboard.dismiss();
    return true;
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const onChangeText = (text: string) => {
    setQuery(text);
    dispatch(searchBooks(text));
  };

  const clear = () => onChangeText('');

  const keyExtractor = (item: TBook) => item.id;
  const renderItem: ListRenderItem<TBook> = props => <BookItem {...props} />;
  const ListFooterComponent = () => <View style={styles.footer} />;
  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headHei}
      style={styles.container}
      onStartShouldSetResponder={onStartShouldSetResponder}
    >
      <TextInput
        search
        clear={clear}
        autoCorrect={false}
        placeholder={t('Search')}
        value={query}
        onChangeText={onChangeText}
      />
      <FlatList
        refreshControl={<RefreshControl refreshing={_global.loader} />}
        data={books.booksList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={ListFooterComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state: TAppState) => ({
  books: state.books,
  _global: state._global,
});

export default connect(mapStateToProps)(Home);

type TProps = {
  books: INITIAL_BOOKS;
  _global: INITIAL_GLOBAL;
};
