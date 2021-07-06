import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { debounce } from 'lodash';

import { fetchSearchApi } from "./search.service";
import { clearSearchAction, followNews } from './search.action';

import { NewsCell } from '../generic/newsCell.component';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Facebook } from 'react-content-loader';

import {
  SearchContainer,
  SearchInputField,
  SearchResultContainer,
  NewsCellContainer,
} from './search.style';

type Props = {
  fetchSearchApi: (searchText: string) => void;
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
  result: Array<Object>;
  searchText: string;
  clearSearchAction: () => void;
  hasMore: boolean;
  followNews: (id: string) => void;
};

const SearchComponent: React.FC<Props> = (props: Props) => {

  const handleTextChange = (e: any) => {
    props.clearSearchAction();
    if (e) {
      props.fetchSearchApi(e.value);
    } else {
      props.fetchSearchApi("US");
    }
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleTextChange, 1000)
  , []);

  useEffect(() => {
    props.fetchSearchApi('US');
    props.followNews('t');

    return () => {
      debouncedChangeHandler.cancel();
    }
  }, []);

  const { isLoading } = props;
  return (
      <SearchContainer>
        <SearchInputField
          className="basic-single"
          classNamePrefix="select"
          isLoading={isLoading}
          isClearable={true}
          isSearchable={true}
          name="country"
          options={[
            { value: 'US', label: 'United States' },
            { value: 'AU', label: 'Australia' },
            { value: 'KR', label: 'Korea' },
            { value: 'JP', label: 'Japan' },
            { value: 'NZ', label: 'New zealand' }
          ]}
          onChange={debouncedChangeHandler}
        />
        <SearchResultContainer id="breweries">
          {props.error ? props.errorMessage : null}
          <NewsCellContainer>
            {props.result.length !== 0 ? (
              props.result.map((i: any, index: number) => {
                return (
                  <LazyLoadComponent key={index}>
                    <NewsCell {...i} followNews={(id) => props.followNews(id)} />
                  </LazyLoadComponent>
                );
              })
            ) : (
              <Facebook />
            )}
          </NewsCellContainer>
        </SearchResultContainer>
      </SearchContainer>
  );
}

const mapStateToProps = (state: any) => ({
  isLoading: state.search.isLoading,
  error: state.search.error,
  errorMessage: state.search.errorMessage,
  result: state.search.result,
  searchText: state.search.searchText,
  hasMore: state.search.hasMore
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchSearchApi: (searchText: string) => dispatch(fetchSearchApi(searchText)),
  clearSearchAction: () => dispatch(clearSearchAction()),
  followNews: (id: string) => dispatch(followNews(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
