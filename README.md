# pipeline-compose-context-merge

Composite action to merge stage outputs into a pipeline context JSON file. Used with advanced compile workflows for [pipeline-compose](https://github.com/aeswibon/pipeline-compose).

## Usage

```yaml
- uses: aeswibon/pipeline-compose-context-merge@v0.1.0
  with:
    context_file: pipeline-context.json
    stage_id: build
    outputs: '{"artifact_id":"123"}'
```

## License

MIT
